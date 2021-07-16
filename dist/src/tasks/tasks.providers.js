"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskProviders = void 0;
const task_entity_1 = require("./entities/task.entity");
exports.taskProviders = [
    {
        provide: 'TASK_REPOSITORY',
        useFactory: (connection) => connection.getRepository(task_entity_1.Task),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=tasks.providers.js.map