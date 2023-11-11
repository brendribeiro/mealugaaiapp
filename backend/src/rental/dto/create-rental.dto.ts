import { Status } from '@prisma/client';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRentalDto {
  @IsString()
  itemId: string;

  @IsString()
  @IsOptional()
  userId: string;

  @IsString()
  rental_date: string;

  status: Status;
}
