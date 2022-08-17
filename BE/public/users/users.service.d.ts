import { User } from './entities/user.entity';
export declare class UserService {
    findByEmail(email: string): Promise<User | undefined>;
    findOne(id: string): Promise<User | undefined>;
}
