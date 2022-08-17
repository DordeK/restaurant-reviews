import { UserDto, CommentDto, RestaurantDto } from './Dto';
export declare class AppService {
    register({ username, email, password, phone_number, }: {
        username: any;
        email: any;
        password: any;
        phone_number: any;
    }): Promise<UserDto>;
    getRestaurants({ longitude, latitude, page, radious, }: {
        longitude: any;
        latitude: any;
        page: any;
        radious: any;
    }): Promise<RestaurantDto[]>;
    getRestaurant({ guid }: {
        guid: any;
    }): Promise<RestaurantDto>;
    addRestaurant(files: any, { ocena, ime, location }: {
        ocena: any;
        ime: any;
        location: any;
    }): Promise<string>;
    addReview(files: any, { uporabnik, restavracija, text }: {
        uporabnik: any;
        restavracija: any;
        text: any;
    }): Promise<import(".prisma/client").Review>;
    addComment({ uporabnik, text, review }: {
        uporabnik: any;
        text: any;
        review: any;
    }): Promise<CommentDto>;
    reactToReview({ review_id, reaction }: {
        review_id: any;
        reaction: any;
    }): Promise<import(".prisma/client").Review>;
    reactToComment({ reaction, comment_id }: {
        reaction: any;
        comment_id: any;
    }): Promise<import(".prisma/client").Komentar>;
}
