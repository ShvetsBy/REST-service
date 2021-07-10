import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getErr(): void {
    throw new Error('oops!');
    //Promise.reject(Error('oops'));
  }
  getHello(): string {
    return 'Rest Service is running!';
  }
}
