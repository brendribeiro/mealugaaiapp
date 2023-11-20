import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('signup')
  @ApiBody({ type: AuthDto })
  @ApiOperation({ summary: 'Create a account' })
  signup(@Body() dto: AuthDto) {
    return this.service.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiBody({ type: AuthDto })
  @ApiOperation({ summary: 'Login' })
  signin(@Body() dto: AuthDto) {
    return this.service.singin(dto);
  }
}
