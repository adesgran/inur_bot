import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: {
    twitchId: string;
    name: string;
    accessToken?: string;
    refreshToken?: string;
    tokenExpiry?: Date;
    twitchUsername?: string;
  }): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get(':twitchId')
  async getUser(@Param('twitchId') twitchId: string): Promise<UserModel | null> {
    return this.userService.getUser(twitchId);
  }

  @Put(':twitchId')
  async updateUser(@Param('twitchId') twitchId: string, @Body() data: {
    name?: string;
    accessToken?: string;
    refreshToken?: string;
    tokenExpiry?: Date;
    twitchUsername?: string;
  }): Promise<UserModel> {
    return this.userService.updateUser(twitchId, data);
  }

  @Delete(':twitchId')
  async deleteUser(@Param('twitchId') twitchId: string): Promise<UserModel> {
    return this.userService.deleteUser(twitchId);
  }
}
