import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async create(@Body() creatUsers: IUser): Promise<IUser> {
    // test
    return await this.usersService.create(creatUsers);
  }
}
