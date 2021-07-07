import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const JWT_SECRET_KEY = 'secret';
    const request = context.switchToHttp().getRequest();
    const { headers } = request;
    const authHeader = headers.authorization;

    if (authHeader !== undefined) {
      const [type, token] = authHeader.split(' ');
      if (type !== 'Bearer' || !token) {
        return false;
      }
      jwt.verify(token, String(JWT_SECRET_KEY));
      return true;
    }
    return false;
  }
}
