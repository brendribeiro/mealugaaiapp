import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { CreateRentalDto } from './dto/create-rental.dto';
import { RentalService } from './rental.service';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('rental')
export class RentalController {
  constructor(private service: RentalService) {}

  @Post()
  createRental(@GetUser('id') userId: string, @Body() dto: CreateRentalDto) {
    return this.service.createRental(userId, dto);
  }

  @Get()
  getMyRentals(@GetUser('id') userId: string) {
    return this.service.getMyRentals(userId);
  }
}
