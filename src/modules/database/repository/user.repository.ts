import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { BaseRepository } from '../../../package/database/postgresql/base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    private readonly userRepository: any
  ) {
    super(userRepository);
  }
}
