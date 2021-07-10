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
            host: configService.get('POSTGRES_HOST'),
            port: configService.get('POSTGRES_PORT'),
            username: configService.get('POSTGRES_USER'),
            password: configService.get('POSTGRES_PASS'),
            database: configService.get('POSTGRES_NAME'),
            entities: [user_entity_1.User, board_entity_1.Board, task_entity_1.Task],
            synchronize: true,
        }),
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=database.providers.js.map