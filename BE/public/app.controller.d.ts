/// <reference types="multer" />
import { AppService } from './app.service';
import { UserDto, CommentDto } from './Dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    register(user: UserDto): Promise<UserDto>;
    getRestaurants(page: number, lat: number, lng: number, radious: number): Promise<import("./Dto").RestaurantDto[]>;
    getRestaurant(guid: string): Promise<import("./Dto").RestaurantDto>;
    addRestaurant(files: Array<Express.Multer.File>, body: any, res: any): Promise<string>;
    addReview(request: any, files: Array<Express.Multer.File>, review: any): Promise<import(".prisma/client").Review>;
    addComment(comment: CommentDto): Promise<CommentDto>;
    reactToReview(body: any): Promise<import(".prisma/client").Review>;
    reactToComment(body: any): Promise<import(".prisma/client").Komentar>;
}
