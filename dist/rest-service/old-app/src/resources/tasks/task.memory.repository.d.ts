import { Task } from '../entities/task.entity';
import { ITaskDTO } from './task.dto';
declare const getAll: (boardId: string) => Promise<Task[]>;
declare const getTaskById: (id: string, boardId: string) => Promise<Task | undefined>;
declare const createTask: (boardId: string, dto: ITaskDTO) => Promise<Task>;
declare const editTask: (dto: Omit<ITaskDTO, 'id'>, id: string, boardId: string) => Promise<Task | 'NOT_FOUND'>;
declare const deleteTask: (id: string) => Promise<void>;
declare const deleteBoardTasks: (boardId: string) => Promise<void>;
export { getAll, getTaskById, createTask, editTask, deleteTask, deleteBoardTasks, };
