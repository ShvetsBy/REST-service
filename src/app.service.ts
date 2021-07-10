import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Rest Service is running on ${process.env.PORT}!`;
  }
}
