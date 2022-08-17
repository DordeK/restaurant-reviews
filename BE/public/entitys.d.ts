declare class RefreshToken {
    constructor(init?: Partial<RefreshToken>);
    id: number;
    userId: number;
    userAgent: string;
    ipAddress: string;
    sign(): string;
}
export default RefreshToken;
