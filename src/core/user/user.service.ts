import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDataDto } from './dto/allusers.dto'
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserDataDto[]> {
    const retrievedUserData = await this.usersRepository.find({ select: ["id", "login"] });
    const requiredUserData = plainToClass(UserDataDto, retrievedUserData);
    
    return requiredUserData
  }
}