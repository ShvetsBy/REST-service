const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBoardById = (id) => boardsRepo.getBoardById(id);
const createBoard = (board) => boardsRepo.createBoard(board);
const editBoard = (id, board) => boardsRepo.editBoard(id, board);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);
module.exports = { getAll, getBoardById, createBoard, editBoard, deleteBoard };
