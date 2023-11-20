import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto, EditItemDto } from './dto';
import { Item } from '@prisma/client';

@Injectable()
export class ItemService {
  constructor(private service: PrismaService) {}

  async getItems(params: {
    name?: string;
    category?: string;
    sector?: string;
  }): Promise<Item[]> {
    const { name, category, sector } = params;
    console.log('ENTROU AQI HEIM');
    console.log('nameweeeeeeeeeeeeeeee' + name);
    return await this.service.item.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
        category: {
          contains: category,
          mode: 'insensitive',
        },
        sector: {
          contains: sector,
          mode: 'insensitive',
        },
      },
      include: {
        owner: true,
      },
    });
  }

  async getItemById(id: string) {
    return this.service.item.findFirst({
      where: { id: id },
      include: { owner: true },
    });
  }

  async getMyItems(ownerId: string) {
    return this.service.item.findMany({
      where: {
        ownerId: ownerId,
      },
      include: { owner: true },
    });
  }

  async createItem(ownerId: string, dto: CreateItemDto) {
    const item = await this.service.item.create({
      data: {
        ownerId,
        ...dto,
      },
    });
  }

  async deleteItem(ownerId: string, itemId: string) {
    const item = await this.service.item.findUnique({
      where: {
        id: itemId,
      },
    });

    if (!item || item.ownerId !== ownerId) {
      throw new ForbiddenException('Access to resources denied');
    }

    await this.service.item.delete({
      where: {
        id: itemId,
      },
    });
  }

  async editItemById(ownerId: string, itemId: string, dto: EditItemDto) {
    const item = await this.service.item.findUnique({
      where: {
        id: itemId,
      },
    });

    if (!item || item.ownerId !== ownerId) {
      throw new ForbiddenException('Access to resources denied');
    }

    return this.service.item.update({
      where: {
        id: itemId,
      },
      data: {
        ...dto,
      },
    });
  }
}
