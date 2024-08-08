import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Adjust the path as needed
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async getUser(twitchId: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { twitchId } });
  }

  async updateUser(twitchId: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { twitchId }, data });
  }

  async deleteUser(twitchId: string): Promise<User> {
    return this.prisma.user.delete({ where: { twitchId } });
  }
}
