import * as tasksRepo from './task.memory.repository.js';

const getAll = () => tasksRepo.getAll();
const getTaskById = (id) => tasksRepo.getTaskById(id);
const createTask = (task, boardId) => tasksRepo.createTask(task, boardId);
const editTask = (id, task) => tasksRepo.editTask(id, task);
const deleteTask = (id) => tasksRepo.deleteTask(id);
const deleteBoardTasks = (boardId) => tasksRepo.deleteBoardTasks(boardId);
export {
  getAll,
  getTaskById,
  createTask,
  editTask,
  deleteTask,
  deleteBoardTasks,
};
