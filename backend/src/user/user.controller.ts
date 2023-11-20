import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';
import { EditUserDto } from './dtos';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get your profile' })
  getProfile(@GetUser() user: User) {
    return user;
  }

  @Patch()
  @ApiBody({ type: EditUserDto })
  @ApiOperation({ summary: 'Edit your profile' })
  editUser(@GetUser('id') userId: string, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
