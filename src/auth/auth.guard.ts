import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Unauthorized } from '../errors/unauthorized.error';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const JWT_SECRET_KEY = 'secret-key';
    const request = context.switchToHttp().getRequest();
    const { headers } = request;
    const authHeader = headers.authorization;
    if (authHeader !== undefined) {
      const [type, token] = authHeader.split(' ');
      if (type !== 'Bearer' || !token) {
        throw new Unauthorized();
      } else if (jwt.verify(token, String(JWT_SECRET_KEY))) {
        return true;
      }
      throw new Unauthorized();
    }
    throw new Unauthorized();
  }
}
