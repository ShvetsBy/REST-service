import { ITaskDTO } from './task.dto';
declare const getAll: (boardId: string) => Promise<import("../entities/task.entity").Task[]>;
declare const getTaskById: (id: string, boardId: string) => Promise<import("../entities/task.entity").Task>;
declare const createTask: (boardId: string, task: ITaskDTO) => Promise<import("../entities/task.entity").Task>;
declare const editTask: (task: ITaskDTO, id: string, boardId: string) => Promise<import("../entities/task.entity").Task | "NOT_FOUND">;
declare const deleteTask: (id: string) => Promise<void>;
declare const deleteBoardTasks: (boardId: string) => Promise<void>;
export { getAll, getTaskById, createTask, editTask, deleteTask, deleteBoardTasks, };
