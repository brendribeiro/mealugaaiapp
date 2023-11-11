import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRentalDto } from './dto';
import { formatISO, parseISO } from 'date-fns';

@Injectable()
export class RentalService {
  constructor(private service: PrismaService) {}

  async createRental(userId: string, dto: CreateRentalDto) {
    const item = await this.service.item.findUnique({
      where: {
        id: dto.itemId,
      },
    });

    const rentalDate = parseISO(dto.rental_date);
    const formattedRentalDate = formatISO(rentalDate);

    const rental = await this.service.rental.create({
      data: {
        userId,
        total: item.price * item.amount,
        rental_date: formattedRentalDate,
        ...dto,
      },
    });
  }

  async getMyRentals(userId: string) {
    return this.service.rental.findMany({
      where: {
        userId: userId,
      },
    });
  }
}
