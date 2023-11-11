import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto, EditItemDto } from './dto';

@Injectable()
export class ItemService {
  constructor(private service: PrismaService) {}

  async getItems() {
    return this.service.item.findMany();
  }

  async getItemById(id: string) {
    return this.service.item.findFirst({
      where: { id: id },
    });
  }

  async getMyItems(ownerId: string) {
    console.log(ownerId);

    return this.service.item.findMany({
      where: {
        ownerId: ownerId,
      },
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
