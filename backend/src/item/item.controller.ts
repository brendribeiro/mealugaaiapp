import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Item } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from 'src/user/dtos';
import { CreateItemDto, EditItemDto } from './dto';
import { ItemService } from './item.service';

@UseGuards(JwtGuard)
@Controller('item')
@ApiTags('item')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  @ApiOperation({ summary: 'Get all items with search' })
  async getItems(
    @Query('name') name: string,
    @Query('category') category: string,
    @Query('sector') sector: string,
  ): Promise<Item[]> {
    return await this.service.getItems({ name, category, sector });
  }

  @Get('/my')
  @ApiOperation({ summary: 'Get your items' })
  async getMyItems(@GetUser('id') ownerId: string) {
    return await this.service.getMyItems(ownerId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a item by id' })
  async getItemById(@Param('id') id: string) {
    return await this.service.getItemById(id);
  }

  @Post()
  @ApiBody({ type: CreateItemDto })
  @ApiOperation({ summary: 'Create a item' })
  async createItem(@GetUser('id') ownerId: string, @Body() dto: CreateItemDto) {
    return await this.service.createItem(ownerId, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a item' })
  async deleteItem(
    @GetUser('id') ownerId: string,
    @Param('id') itemId: string,
  ) {
    return await this.service.deleteItem(ownerId, itemId);
  }

  @Patch(':id')
  @ApiBody({ type: EditUserDto })
  @ApiOperation({ summary: 'Update a item' })
  async editItemById(
    @GetUser('id') ownerId: string,
    @Param('id') itemId: string,
    @Body() dto: EditItemDto,
  ) {
    return await this.service.editItemById(ownerId, itemId, dto);
  }
}
