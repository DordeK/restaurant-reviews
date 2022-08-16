import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDto, ReviewDto, MenuDto, CommentDto, RestaurantDto } from './Dto';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async register({
    username,
    email,
    password,
    phone_number,
  }): Promise<UserDto> {
    const user = await prisma.uporabnik.create({
      data: {
        email,
        username,
        password,
        phone_number,
      },
    });
    return user;
  }

  async getRestaurants({
    longitude,
    latitude,
    page,
    radious,
  }): Promise<RestaurantDto[]> {
    const pageSize = 10;
    const radiousInDegress = parseFloat(radious) * 0.009009009;
    const restaurants = await prisma.restavracija.findMany({
      take: pageSize,
      skip: page * pageSize,
      where: {
        location: {
          lat: {
            gt: parseFloat(latitude) - radiousInDegress,
            lt: parseFloat(latitude) + radiousInDegress,
          },
          lng: {
            gt: parseFloat(longitude) - radiousInDegress,
            lt: parseFloat(longitude) + radiousInDegress,
          },
        },
      },
      select: {
        id: true,
        ocena: true,
        ime: true,
        location: true,
        menu: true,
        Images: true,
      },
    });

    return restaurants;
  }

  async getRestaurant({ guid }): Promise<RestaurantDto> {
    const restaurant = await prisma.restavracija.findFirst({
      where: {
        id: guid,
      },
      select: {
        id: true,
        ocena: true,
        ime: true,
        location: true,
        menu: true,
        Images: true,
        reviews: {
          select: {
            id: true,
            like_num: true,
            dislike_num: true,
            Uporabnik: {
              select: {
                username: true,
                email: true,
              },
            },
            restavracija: true,
            text: true,
            comments: {
              select: {
                Uporabnik: {
                  select: {
                    username: true,
                  },
                },
                text: true,
              },
            },
            images: true,
          },
        },
      },
    });
    return restaurant;
  }

  async addRestaurant(files, { ocena, ime, location }): Promise<string> {
    const { id } = await prisma.restavracija.create({
      data: {
        ocena: parseInt(ocena, 10),
        ime,
      },
    });
    await prisma.location.create({
      data: {
        ...JSON.parse(location),
        restavracija: id,
      },
    });

    const menu = files.filter((file) => file.fieldname === 'menu[]');
    const images = files.filter((file) => file.fieldname === 'images[]');

    menu.forEach(async (file) => {
      await prisma.menu.create({
        data: {
          restavracija: id,
          image: file.buffer.toString('base64'),
        },
      });
    });

    images.forEach(async (file) => {
      await prisma.restaurantImages.create({
        data: {
          restavracija: id,
          image: file.buffer.toString('base64'),
        },
      });
    });
    return id;
  }

  async addReview(files, { uporabnik, restavracija, text }) {
    const review = await prisma.review.create({
      data: {
        like_num: 0,
        dislike_num: 0,
        uporabnik,
        restavracija,
        text,
      },
    });

    files.forEach(async (file) => {
      await prisma.reviewImages.create({
        data: {
          image: file.buffer.toString('base64'),
          review: review.id,
        },
      });
    });

    return review;
  }

  async addComment({ uporabnik, text, review }): Promise<CommentDto> {
    console.log({ uporabnik, text, review });
    const addedComment = await prisma.komentar.create({
      data: {
        like_num: 0,
        dislike_num: 0,
        uporabnik,
        text,
        review,
      },
    });
    return addedComment;
  }

  async reactToReview({ review_id, reaction }) {
    if (reaction === 'like') {
      return await prisma.review.update({
        where: {
          id: review_id,
        },
        data: {
          like_num: {
            increment: 1,
          },
        },
      });
    } else {
      return await prisma.review.update({
        where: {
          id: review_id,
        },
        data: {
          dislike_num: {
            increment: 1,
          },
        },
      });
    }
  }

  async reactToComment({ reaction, comment_id }) {
    if (reaction === 'like') {
      return await prisma.komentar.update({
        where: {
          id: comment_id,
        },
        data: {
          like_num: {
            increment: 1,
          },
        },
      });
    } else {
      return await prisma.komentar.update({
        where: {
          id: comment_id,
        },
        data: {
          dislike_num: {
            increment: 1,
          },
        },
      });
    }
  }
}
