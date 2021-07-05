import { Connection } from 'typeorm';
import { Task } from './entities/task.entity';
export declare const taskProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Task>;
    inject: string[];
}[];
