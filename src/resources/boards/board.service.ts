import * as boardsRepo from './board.memory.repository.js';

const getAll = () => boardsRepo.getAll();
const getBoardById = (id) => boardsRepo.getBoardById(id);
const createBoard = (board) => boardsRepo.createBoard(board);
const editBoard = (id, board) => boardsRepo.editBoard(id, board);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

export { getAll, getBoardById, createBoard, editBoard, deleteBoard };
