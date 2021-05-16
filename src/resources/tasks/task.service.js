const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getTaskById = (id) => tasksRepo.getTaskById(id);
const createTask = (task, boardId) => tasksRepo.createTask(task, boardId);
const editTask = (id, task) => tasksRepo.editTask(id, task);
const deleteTask = (id) => tasksRepo.deleteTask(id);
module.exports = { getAll, getTaskById, createTask, editTask, deleteTask };
