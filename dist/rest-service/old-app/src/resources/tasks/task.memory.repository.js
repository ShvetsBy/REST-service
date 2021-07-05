"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardTasks = exports.deleteTask = exports.editTask = exports.createTask = exports.getTaskById = exports.getAll = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../entities/task.entity");
const board_entity_1 = require("../entities/board.entity");
const getAll = async (boardId) => {
    try {
        const taskRepo = typeorm_1.getRepository(task_entity_1.Task);
        return taskRepo.find({ where: { boardId } });
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.getAll = getAll;
const getTaskById = async (id, boardId) => {
    try {
        const taskRepo = typeorm_1.getRepository(task_entity_1.Task);
        const task = taskRepo.findOne(id, { where: { boardId } });
        if (!task)
            throw new Error("Can't find such task");
        return task;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.getTaskById = getTaskById;
const createTask = async (boardId, dto) => {
    try {
        if (!await typeorm_1.getRepository(board_entity_1.Board).findOne(boardId)) {
            throw new Error(`Board with ID:${boardId} doesn't exist.`);
        }
        const taskRepo = typeorm_1.getRepository(task_entity_1.Task);
        const newTask = taskRepo.create(dto);
        newTask.boardId = boardId;
        return taskRepo.save(newTask);
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.createTask = createTask;
const editTask = async (dto, id, boardId) => {
    try {
        const taskRepo = typeorm_1.getRepository(task_entity_1.Task);
        const taskToEdit = taskRepo.findOne(id, { where: { boardId } });
        if (taskToEdit === undefined)
            return 'NOT_FOUND';
        const updatedTask = await taskRepo.update(id, dto);
        return updatedTask.raw;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.editTask = editTask;
const deleteTask = async (id) => {
    try {
        const taskRepo = typeorm_1.getRepository(task_entity_1.Task);
        await taskRepo.delete(id);
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.deleteTask = deleteTask;
const deleteBoardTasks = async (boardId) => {
    try {
        const tasks = getAll(boardId);
        if (tasks) {
            (await tasks).map((task) => {
                if (task.boardId === boardId) {
                    deleteTask(task.id);
                    return true;
                }
                return false;
            });
        }
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.deleteBoardTasks = deleteBoardTasks;
//# sourceMappingURL=task.memory.repository.js.map