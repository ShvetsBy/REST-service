"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const taskService = require("./task.service");
const router = express_1.default.Router();
exports.router = router;
router.route('/:boardId/tasks').get(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const tasks = await taskService.getAll(boardId);
        if (tasks) {
            res.status(http_status_codes_1.StatusCodes.OK).json(tasks);
        }
        else {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND);
        }
    }
    catch (e) {
        next(e);
    }
});
router.route('/:boardId/tasks/:id').get(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const task = await taskService.getTaskById(req.params.id, boardId);
        console.log('current task id', req.params.id);
        if (task) {
            res.status(http_status_codes_1.StatusCodes.OK).json(task);
        }
        else {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json('No task found');
        }
    }
    catch (e) {
        next(e);
    }
});
router.route('/:boardId/tasks').post(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const newTask = await taskService.createTask(boardId, req.body);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(newTask);
    }
    catch (e) {
        next(e);
    }
});
router.route('/:boardId/tasks/:id').put(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const editTask = await taskService.editTask(req.body, req.params.id, boardId);
        res.status(http_status_codes_1.StatusCodes.OK).json(editTask);
    }
    catch (e) {
        next(e);
    }
});
router.route('/:boardId/tasks/:id').delete(async (req, res, next) => {
    try {
        await taskService.deleteTask(req.params.id);
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=task.router.js.map