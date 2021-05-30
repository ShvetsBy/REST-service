import * as boardsRepo from './board.memory.repository.js';
import { IBoards } from './board.model'

const getAll = () => boardsRepo.getAll();
const getBoardById = (id: string) => boardsRepo.getBoardById(id);
const createBoard = (board: IBoards) => boardsRepo.createBoard(board);
const editBoard = (id: string, board: IBoards) => boardsRepo.editBoard(id, board);
const deleteBoard = (id: string) => boardsRepo.deleteBoard(id);

export { getAll, getBoardById, createBoard, editBoard, deleteBoard };
