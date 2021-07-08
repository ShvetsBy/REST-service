import { CanActivate, ExecutionContext, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const JWT_SECRET_KEY = 'secret-key';
    const request = context.switchToHttp().getRequest();
    const { headers } = request;
    const authHeader = headers.authorization;
    if (authHeader !== undefined) {
      const [type, token] = authHeader.split(' ');
      if (type !== 'Bearer' || !token) {
        throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
      }
      jwt.verify(token, String(JWT_SECRET_KEY));
      return true;
    }
    throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
  }
}
