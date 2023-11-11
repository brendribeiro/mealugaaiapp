import { Status } from '@prisma/client';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class RentalDto {
  @IsString()
  id: string;

  @IsString()
  itemId: string;

  @IsString()
  userId: string;
  
  @IsNumber()
  total: number;

  @IsDate()
  rental_date: Date;

  status: Status;
}
