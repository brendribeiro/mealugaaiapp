import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateItemDto, EditItemDto } from './dto';
import { ItemService } from './item.service';

@UseGuards(JwtGuard)
@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  getItems() {
    return this.service.getItems();
  }

  @Get('/my')
  getMyItems(@GetUser('id') ownerId: string) {
    return this.service.getMyItems(ownerId);
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.service.getItemById(id);
  }

  @Post()
  createItem(@GetUser('id') ownerId: string, @Body() dto: CreateItemDto) {
    return this.service.createItem(ownerId, dto);
  }

  @Delete(':id')
  deleteItem(@GetUser('id') ownerId: string, @Param('id') itemId: string) {
    return this.service.deleteItem(ownerId, itemId);
  }

  @Patch(':id')
  editItemById(
    @GetUser('id') ownerId: string,
    @Param('id') itemId: string,
    @Body() dto: EditItemDto,
  ) {
    return this.service.editItemById(ownerId, itemId, dto);
  }
}
