import { UserService } from '../users/users.service';
export declare class AuthService {
    private readonly userService;
    private refreshTokens;
    constructor(userService: UserService);
    refresh(refreshStr: string): Promise<string | undefined>;
    private retrieveRefreshToken;
    login(email: string, password: string, values: {
        userAgent: string;
        ipAddress: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private newRefreshAndAccessToken;
    logout(refreshStr: any): Promise<void>;
}
