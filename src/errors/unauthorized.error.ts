import { HttpException, HttpStatus } from '@nestjs/common';

export class Unauthorized extends HttpException {
  constructor() {
    super('Access denied. Please authorize.', HttpStatus.UNAUTHORIZED);
  }
}
