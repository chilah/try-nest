import { Body, Controller, Get } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  create(@Body() creatUsers: IUser): IUser {
    return this.usersService.create(creatUsers);
  }
}
