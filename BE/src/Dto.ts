import { IsEmail, IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @IsNotEmpty()
  refreshToken: string;
}

export class UserDto {
  id?: string;
  password: string;
  username: string;
  phone_number: string;
  email: string;
}

export class ReviewDto {
  id?: string;
  like_num?: number;
  dislike_num?: number;
  uporabnik?: UserDto;
  restavracija: string;
  text: string;
}

export class MenuDto {
  id?: string;
  restavracija: string;
}

export class CommentDto {
  like_num: number;
  dislike_num: number;
  uporabnik: string;
  text: string;
  review: string;
}

export class RestaurantDto {
  id?: string;
  ocena?: number;
  ime?: string;
  location?: LocationDto;
  reviews?: ReviewDto[];
  menu?: MenuDto[];
  Images?: RestaurantImagesDto[];
}

export class LocationDto {
  lat: number;
  lng: number;
}

export class RestaurantImagesDto {
  id: string;
  image: string;
}

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
