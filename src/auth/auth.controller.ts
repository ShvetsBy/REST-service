import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    const newToken = await this.authService.generateToken(
      loginDto.login,
      loginDto.password
    );
    return response.json({ token: newToken });
  }
}
