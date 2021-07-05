"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.editBoard = exports.createBoard = exports.getBoardById = exports.getAll = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("../entities/board.entity");
const getAll = async () => {
    try {
        const boardRepo = typeorm_1.getRepository(board_entity_1.Board);
        return boardRepo.find({ where: {} });
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.getAll = getAll;
const getBoardById = async (id) => {
    try {
        const boardRepo = typeorm_1.getRepository(board_entity_1.Board);
        const board = boardRepo.findOne(id);
        if (!board) {
            throw new Error("Can't find such board");
        }
        return board;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.getBoardById = getBoardById;
const createBoard = async (dto) => {
    try {
        const boardRepo = typeorm_1.getRepository(board_entity_1.Board);
        const newBoard = boardRepo.create(dto);
        const savedBoard = boardRepo.save(newBoard);
        return savedBoard;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.createBoard = createBoard;
const editBoard = async (dto, id) => {
    const boardRepo = typeorm_1.getRepository(board_entity_1.Board);
    const board = await boardRepo.findOne(id);
    if (board === undefined)
        return 'NOT_FOUND';
    const updatedBoard = await boardRepo.update(id, dto);
    return updatedBoard.raw;
};
exports.editBoard = editBoard;
const deleteBoard = async (id) => {
    const boardRepo = await typeorm_1.getRepository(board_entity_1.Board);
    await boardRepo.delete(id);
};
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=board.memory.repository.js.map