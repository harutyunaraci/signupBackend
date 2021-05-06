import { PipeTransform, Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { UserEntity } from '../user.entity';

@Injectable()
export class UserEntityPipe implements PipeTransform {
  constructor(private readonly authService: AuthService) {}

  async transform(userId: number): Promise<UserEntity> {
    return this.authService.getAccountById(userId);
  }
}
