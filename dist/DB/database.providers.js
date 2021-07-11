"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../src/users/entities/user.entity");
const board_entity_1 = require("../src/boards/entities/board.entity");
const task_entity_1 = require("../src/tasks/entities/task.entity");
const config_1 = require("@nestjs/config");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        imports: [config_1.ConfigModule],
        useFactory: async (configService) => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            entities: [user_entity_1.User, board_entity_1.Board, task_entity_1.Task],
            synchronize: false,
            migrationsTableName: 'REST-service',
            migrations: ['../migrations/**/*{.ts,.js}'],
            cli: {
                migrationsDir: '/src/migrations',
            },
        }),
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=database.providers.js.map