import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
@Exclude()
export class UserDataDto {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  login: string;
}