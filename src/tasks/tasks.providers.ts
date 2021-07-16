import { Connection } from 'typeorm';
import { Task } from './entities/task.entity';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Task),
    inject: ['DATABASE_CONNECTION'],
  },
];
