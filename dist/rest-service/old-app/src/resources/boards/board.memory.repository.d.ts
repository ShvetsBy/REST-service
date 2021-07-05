import { Board } from '../entities/board.entity';
import { BoardDto } from './boards.dto';
declare const getAll: () => Promise<Board[]>;
declare const getBoardById: (id: string) => Promise<Board>;
declare const createBoard: (dto: BoardDto) => Promise<Board>;
declare const editBoard: (dto: BoardDto, id: string) => Promise<Board | 'NOT_FOUND'>;
declare const deleteBoard: (id: string) => Promise<void>;
export { getAll, getBoardById, createBoard, editBoard, deleteBoard, };
