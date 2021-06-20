import { Board } from '../entities/board.entity';
import { getRepository } from 'typeorm'
import { BoardDto } from './boards.dto';



const getAll = async () => {
  try {
    const boardRepo = getRepository(Board);
    return boardRepo.find({where: {} });
  } catch (e) {
    throw new Error(e);
  }
};

const getBoardById = async (id: string) => {
  try {
    const boardRepo = getRepository(Board);
    const board = boardRepo.findOne(id);
    if (!board) {
      throw new Error("Can't find such board");
    }
    return board;
  } catch (e) {
    throw new Error(e);
  }
};


const createBoard = async (dto: BoardDto) => {
  try {
    const boardRepo = getRepository(Board);
    const newBoard = boardRepo.create(dto);
    const savedBoard = boardRepo.save(newBoard);
    return savedBoard;
  } catch (e) {
    throw new Error(e);
  }
};

const editBoard = async (dto: BoardDto, id: string): Promise<Board | 'NOT_FOUND'> => {
  const boardRepo = getRepository(Board);
  const board = await boardRepo.findOne(id);
  if (board === undefined) return 'NOT_FOUND';
  const updatedBoard = await boardRepo.update(id, dto);
  return updatedBoard.raw;  
};


const deleteBoard = async (id: string):Promise<'DELETED' | 'NOT_FOUND'> => {
  const boardRepo = getRepository(Board);
  const boardDeleted = await boardRepo.delete(id);
  if (boardDeleted.affected) return 'DELETED';
  return 'NOT_FOUND';
};
export {
  getAll, getBoardById, createBoard, editBoard, deleteBoard,
};
