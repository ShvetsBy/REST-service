import { BoardDto } from './boards.dto';
declare const getAll: () => Promise<import("../entities/board.entity").Board[]>;
declare const getBoardById: (id: string) => Promise<import("../entities/board.entity").Board>;
declare const createBoard: (board: BoardDto) => Promise<import("../entities/board.entity").Board>;
declare const editBoard: (id: string, board: BoardDto) => Promise<import("../entities/board.entity").Board | "NOT_FOUND">;
declare const deleteBoard: (id: string) => Promise<void>;
export { getAll, getBoardById, createBoard, editBoard, deleteBoard, };
