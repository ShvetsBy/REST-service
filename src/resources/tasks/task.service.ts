import * as tasksRepo from './task.memory.repository';
import { ITask } from './task.interface';

const getAll = () => tasksRepo.getAll();
const getTaskById = (id: string) => tasksRepo.getTaskById(id);
const createTask = (task: ITask, boardId: string) => tasksRepo.createTask(task, boardId);
const editTask = (task: ITask, id: string) => tasksRepo.editTask(task, id);
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
