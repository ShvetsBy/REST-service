import { createConnection } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../configOrm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    imports: [ConfigModule],
    useFactory: async () => await createConnection(config),
    inject: [ConfigService],
  },
];