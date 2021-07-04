"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../src/users/entities/user.entity");
const board_entity_1 = require("../src/boards/entities/board.entity");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            entities: [user_entity_1.User, board_entity_1.Board],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map