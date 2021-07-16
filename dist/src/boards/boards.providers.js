"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardProviders = void 0;
const board_entity_1 = require("./entities/board.entity");
exports.boardProviders = [
    {
        provide: 'BOARD_REPOSITORY',
        useFactory: (connection) => connection.getRepository(board_entity_1.Board),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=boards.providers.js.map