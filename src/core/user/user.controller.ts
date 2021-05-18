import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './user.service'
import { UserEntity } from './user.entity'

@Controller('users')
export class UserController {
  constructor(private readonly UsersService: UsersService) {}
  @Get('userlist')
  getAllUsers(): Promise<UserEntity[]> {
    return this.UsersService.findAll();
  }
}
