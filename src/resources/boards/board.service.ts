import * as boardsRepo from './board.memory.repository';
import { BoardDto } from '../boards/boards.dto'

const getAll = () => boardsRepo.getAll();
const getBoardById = (id: string) => boardsRepo.getBoardById(id);
const createBoard = (board: BoardDto) => boardsRepo.createBoard(board);
const editBoard = (id: string, board: BoardDto) => boardsRepo.editBoard(board, id);
const deleteBoard = (id: string) => boardsRepo.deleteBoard(id);

export {
  getAll, getBoardById, createBoard, editBoard, deleteBoard,
};
