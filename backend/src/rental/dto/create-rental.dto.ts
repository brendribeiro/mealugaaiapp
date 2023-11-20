import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRentalDto {
  @IsString()
  @ApiProperty()
  itemId: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  userId: string;

  @IsString()
  @ApiProperty()
  rental_date: string;

  @ApiProperty()
  status: Status;
}
