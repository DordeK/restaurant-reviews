import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  findByEmail(email: string): Promise<User | undefined> {
    const user = prisma.uporabnik.findFirst({ where: { email: email } });
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }
  findOne(id: string): Promise<User | undefined> {
    const user = prisma.uporabnik.findFirst({ where: { id: id } });
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }
}
