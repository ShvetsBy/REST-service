"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardTasks = exports.deleteTask = exports.editTask = exports.createTask = exports.getTaskById = exports.getAll = void 0;
const tasksRepo = require("./task.memory.repository");
const getAll = (boardId) => tasksRepo.getAll(boardId);
exports.getAll = getAll;
const getTaskById = (id, boardId) => tasksRepo.getTaskById(id, boardId);
exports.getTaskById = getTaskById;
const createTask = (boardId, task) => tasksRepo.createTask(boardId, task);
exports.createTask = createTask;
const editTask = (task, id, boardId) => tasksRepo.editTask(task, id, boardId);
exports.editTask = editTask;
const deleteTask = (id) => tasksRepo.deleteTask(id);
exports.deleteTask = deleteTask;
const deleteBoardTasks = (boardId) => tasksRepo.deleteBoardTasks(boardId);
exports.deleteBoardTasks = deleteBoardTasks;
//# sourceMappingURL=task.service.js.map