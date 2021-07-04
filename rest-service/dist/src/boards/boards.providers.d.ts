import { Connection } from 'typeorm';
import { Board } from './entities/board.entity';
export declare const boardProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Board>;
    inject: string[];
}[];
