import { createConnection } from 'typeorm';
import { User } from '../src/users/entities/user.entity'
import { Board } from '../src/boards/entities/board.entity'
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [ User, Board ],
      synchronize: true,
    }),
  },
  
];