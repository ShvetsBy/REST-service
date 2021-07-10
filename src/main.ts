import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  LoggingInterceptor,
  configMorgan,
  morganRequestLogger,
  morganResponseLogger,
  TOKEN_TYPE,
} from 'nestjs-winston-logger';
import * as helmet from 'helmet';
import { globalLogger } from '../src/utils/logger/globalLogger';
import { HttpExceptionFilter } from './errors/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useLogger(globalLogger);
  configMorgan.appendMorganToken('reqId', TOKEN_TYPE.Request, 'reqId');
  app.use(morganRequestLogger(globalLogger));
  app.use(morganResponseLogger(globalLogger));
  app.useGlobalInterceptors(new LoggingInterceptor(globalLogger));
  await app.listen(process.env.PORT);
}
bootstrap();
