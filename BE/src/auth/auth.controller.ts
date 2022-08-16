import { log } from 'console';
import { Body, Controller, Delete, Ip, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import RefreshTokenDto from './Dto/refresh-token.dto';
import { LoginDto } from './Dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    const a = this.authService.login(body.email, body.password, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    });

    return a;
  }

  @Post('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

  @Delete('/logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}
