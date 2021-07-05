"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.editBoard = exports.createBoard = exports.getBoardById = exports.getAll = void 0;
const boardsRepo = require("./board.memory.repository");
const getAll = () => boardsRepo.getAll();
exports.getAll = getAll;
const getBoardById = (id) => boardsRepo.getBoardById(id);
exports.getBoardById = getBoardById;
const createBoard = (board) => boardsRepo.createBoard(board);
exports.createBoard = createBoard;
const editBoard = (id, board) => boardsRepo.editBoard(board, id);
exports.editBoard = editBoard;
const deleteBoard = (id) => boardsRepo.deleteBoard(id);
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=board.service.js.map