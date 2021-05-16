import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  create(user: IUser) {
    try {
      return user;
    } catch (error) {}
  }
}
