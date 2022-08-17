"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let AppService = class AppService {
    async register({ username, email, password, phone_number, }) {
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
    async getRestaurants({ longitude, latitude, page, radious, }) {
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
    async getRestaurant({ guid }) {
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
    async addRestaurant(files, { ocena, ime, location }) {
        const { id } = await prisma.restavracija.create({
            data: {
                ocena: parseInt(ocena, 10),
                ime,
            },
        });
        await prisma.location.create({
            data: Object.assign(Object.assign({}, JSON.parse(location)), { restavracija: id }),
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
    async addComment({ uporabnik, text, review }) {
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
        }
        else {
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
        }
        else {
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
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map