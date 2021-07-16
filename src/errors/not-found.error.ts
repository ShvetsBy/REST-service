import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFound extends HttpException {
  constructor(subject: string) {
    super(`${subject} not found`, HttpStatus.NOT_FOUND);
  }
}
