import * as tasksRepo from './task.memory.repository';
import { ITaskDTO } from './task.dto';

const getAll = (boardId: string) => tasksRepo.getAll(boardId);
const getTaskById = (id: string, boardId: string) => tasksRepo.getTaskById(id, boardId);
const createTask = (boardId:string, task: ITaskDTO) => tasksRepo.createTask(boardId, task);
const editTask = (
  task:ITaskDTO,
  id:string,
  boardId:string,
) => tasksRepo.editTask(task, id, boardId);
const deleteTask = (id: string) => tasksRepo.deleteTask(id);
const deleteBoardTasks = (boardId: string) => tasksRepo.deleteBoardTasks(boardId);
export {
  getAll,
  getTaskById,
  createTask,
  editTask,
  deleteTask,
  deleteBoardTasks,
};
