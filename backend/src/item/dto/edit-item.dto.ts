import { IsNumber, IsString } from 'class-validator';

export class EditItemDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  sector: string;

  @IsNumber()
  price: number;

  @IsNumber()
  amount: number;
}
