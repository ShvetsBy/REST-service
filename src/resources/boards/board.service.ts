import * as boardsRepo from './board.memory.repository.js';
import { IBoard } from './board.interface'

const getAll = () => boardsRepo.getAll();
const getBoardById = (id: string) => boardsRepo.getBoardById(id);
const createBoard = (board: IBoard) => boardsRepo.createBoard(board);
const editBoard = (id: string, board: IBoard) => boardsRepo.editBoard(id, board);
const deleteBoard = (id: string) => boardsRepo.deleteBoard(id);

export { getAll, getBoardById, createBoard, editBoard, deleteBoard };
