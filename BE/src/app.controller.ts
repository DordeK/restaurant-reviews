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
  UseGuards,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto, CommentDto } from './Dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/register')
  register(@Body() user: UserDto) {
    return this.appService.register(user);
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get('/restaurant/:guid')
  getRestaurant(@Param('guid') guid: string) {
    return this.appService.getRestaurant({ guid });
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Post('/review')
  @UseInterceptors(AnyFilesInterceptor())
  addReview(
    @Req() request,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() review,
  ) {
    console.log(request);
    return this.appService.addReview(files, review);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/comment')
  addComment(@Body() comment: CommentDto) {
    return this.appService.addComment(comment);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/reactToReview')
  reactToReview(@Body() body) {
    return this.appService.reactToReview(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/reactToComment')
  reactToComment(@Body() body) {
    return this.appService.reactToComment(body);
  }
}
