import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class RentalDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  itemId: string;

  @IsString()
  @ApiProperty()
  userId: string;
  
  @IsNumber()
  @ApiProperty()
  total: number;

  @IsDate()
  @ApiProperty()
  rental_date: Date;

  @ApiProperty()
  status: Status;
}
