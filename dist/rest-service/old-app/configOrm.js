"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const user_intity_1 = require("./src/resources/entities/user.intity");
const board_entity_1 = require("./src/resources/entities/board.entity");
const task_entity_1 = require("./src/resources/entities/task.entity");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
const config = {
    type: 'postgres',
    host: process.env['POSTGRES_HOST'],
    port: process.env['POSTGRES_PORT'],
    username: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASS'],
    database: process.env['POSTGRES_NAME'],
    synchronize: false,
    entities: [user_intity_1.User, board_entity_1.Board, task_entity_1.Task],
    migrationsTableName: 'REST-service',
    migrations: [path_1.default.join(__dirname, '../migrations/**/*{.ts,.js}')],
    cli: {
        migrationsDir: '/src/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=configOrm.js.map