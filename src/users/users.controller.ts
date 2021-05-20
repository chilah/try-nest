import { Body, Controller, Post } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async create(@Body() creatUser: IUser): Promise<IUser> {
    const user = await this.usersService.create(creatUser);

    return user;
  }
}
