import { HttpException, HttpStatus } from '@nestjs/common';

export class Forbidden extends HttpException {
  constructor() {
    super('You have no permission to procced', HttpStatus.FORBIDDEN);
  }
}
