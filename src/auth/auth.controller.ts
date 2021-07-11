import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const newToken = await this.authService.generateToken(
      loginDto.login,
      loginDto.password
    );
    if (!newToken) {
      res.status(StatusCodes.FORBIDDEN).send(ReasonPhrases.FORBIDDEN);
    }
    return res.send({ token: newToken });
  }
}
