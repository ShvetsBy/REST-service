import { createConnection } from 'typeorm';
import { User } from '../src/users/entities/user.entity'
import { Board } from '../src/boards/entities/board.entity'
import { Task } from '../src/tasks/entities/task.entity'
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
      entities: [ User, Board, Task ],
      synchronize: true,
    }),
  },
  
];