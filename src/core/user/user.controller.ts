import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './user.service'
import { UserDataDto } from './dto/allusers.dto'

@Controller('users')
export class UserController {
  constructor(private readonly UsersService: UsersService) {}
  @Get('userlist')
  getAllUsers(): Promise<UserDataDto[]> {
    return this.UsersService.findAll();
  }
}
