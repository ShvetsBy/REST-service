import { Injectable } from '@nestjs/common';
import {
  NestjsWinstonLoggerService,
  InjectLogger,
} from 'nestjs-winston-logger';


@Injectable()
export class LoggerService {
  constructor(
    @InjectLogger(LoggerService.name) private logger: NestjsWinstonLoggerService
  ) {}
}
