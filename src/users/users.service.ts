import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IUser } from './interfaces/users.interface';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async create(dto: IUser): Promise<IUser> {
    const userExist = await this.usersRepository.findOne({
      username: dto.username,
    });

    if (userExist) {
      throw new BadRequestException('Unable to register');
    }

    const userData = this.usersRepository.create(dto);
    const user = await this.usersRepository.save(userData);

    delete user.password;

    return user;
  }
}
