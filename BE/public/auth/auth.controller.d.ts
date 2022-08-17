import { AuthService } from './auth.service';
import RefreshTokenDto from './Dto/refresh-token.dto';
import { LoginDto } from './Dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: any, ip: string, body: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(body: RefreshTokenDto): Promise<string>;
    logout(body: RefreshTokenDto): Promise<void>;
}
