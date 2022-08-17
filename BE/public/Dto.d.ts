export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class UserDto {
    id?: string;
    password: string;
    username: string;
    phone_number: string;
    email: string;
}
export declare class ReviewDto {
    id?: string;
    like_num?: number;
    dislike_num?: number;
    uporabnik?: UserDto;
    restavracija: string;
    text: string;
}
export declare class MenuDto {
    id?: string;
    restavracija: string;
}
export declare class CommentDto {
    like_num: number;
    dislike_num: number;
    uporabnik: string;
    text: string;
    review: string;
}
export declare class RestaurantDto {
    id?: string;
    ocena?: number;
    ime?: string;
    location?: LocationDto;
    reviews?: ReviewDto[];
    menu?: MenuDto[];
    Images?: RestaurantImagesDto[];
}
export declare class LocationDto {
    lat: number;
    lng: number;
}
export declare class RestaurantImagesDto {
    id: string;
    image: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
