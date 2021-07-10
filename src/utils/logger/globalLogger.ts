import { NestjsWinstonLoggerService } from 'nestjs-winston-logger';
import { format, transports } from 'winston';

export const globalLogger = new NestjsWinstonLoggerService({
  format: format.combine(
    format.timestamp({ format: 'isoDateTime' }),
    format.json(),
    format.colorize({ all: true })
  ),
  transports: [
    new transports.File({ filename: process.env.ERROR_OUTPUT, level: 'error' }),
    new transports.File({ filename: process.env.LOG_OUTPUT }),
    new transports.Console(),
  ],
});
