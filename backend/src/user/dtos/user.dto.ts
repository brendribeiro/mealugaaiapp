import { IsEmail, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  hash: string;

  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
