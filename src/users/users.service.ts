import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IUser } from './interfaces/users.interface';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async create(value: IUser): Promise<IUser> {
    const user = new Users();

    user.firstname = value.firstname;
    user.lastname = value.lastname;
    user.username = value.username;
    user.password = value.password;

    return await this.usersRepository.save(user);
  }
}
