import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  UseInterceptors,
  UploadedFiles,
  Res,
  Put,
  Delete,
  Req,
  Ip,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  UserDto,
  ReviewDto,
  MenuDto,
  LoginDto,
  CommentDto,
  RestaurantDto,
  RefreshTokenDto,
} from './Dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/register')
  register(@Body() user: UserDto) {
    return this.appService.register(user);
  }

  @Get('/restaurants')
  getRestaurants(
    @Query('page') page: number,
    @Query('lat') lat: number,
    @Query('lng') lng: number,
    @Query('radiousKm') radious: number,
  ) {
    return this.appService.getRestaurants({
      longitude: lng,
      latitude: lat,
      page,
      radious,
    });
  }

  @Get('/restaurant/:guid')
  getRestaurant(@Param('guid') guid: string) {
    return this.appService.getRestaurant({ guid });
  }

  // @UseInterceptors(FilesInterceptor('images[]'))
  @Post('/restaurant')
  @UseInterceptors(AnyFilesInterceptor())
  addRestaurant(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
    @Res() res,
  ) {
    try {
      return this.appService.addRestaurant(files, body);
    } catch (err) {
      console.log(res);
      console.log(err);
    }
  }

  @Post('/review')
  @UseInterceptors(AnyFilesInterceptor())
  addReview(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() review,
  ) {
    return this.appService.addReview(files, review);
  }

  @Post('/comment')
  addComment(@Body() comment: CommentDto) {
    return this.appService.addComment(comment);
  }

  @Put('/reactToReview')
  reactToReview(@Body() body) {
    return this.appService.reactToReview(body);
  }

  @Put('/reactToComment')
  reactToComment(@Body() body) {
    return this.appService.reactToComment(body);
  }
}
