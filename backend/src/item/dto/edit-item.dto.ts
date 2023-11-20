import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditItemDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  category?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sector?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  price?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  amount?: number;
}
