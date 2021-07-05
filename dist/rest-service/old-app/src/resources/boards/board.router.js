"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const boardService = require("./board.service");
const tasksService = require("../tasks/task.service");
const router = express_1.default.Router();
exports.router = router;
router.route('/').get(async (_req, res, next) => {
    try {
        const boards = await boardService.getAll();
        res.status(http_status_codes_1.StatusCodes.OK).json(boards);
    }
    catch (e) {
        next(e);
    }
});
router.route('/:id').get(async (req, res, next) => {
    try {
        const board = await boardService.getBoardById(req.params.id);
        if (board) {
            res.status(http_status_codes_1.StatusCodes.OK).json(board);
        }
        else
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json('No board found');
    }
    catch (e) {
        next(e);
    }
});
router.route('/').post(async (req, res, next) => {
    try {
        const newBoard = await boardService.createBoard(req.body);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(newBoard);
    }
    catch (e) {
        next(e);
    }
});
router.route('/:id').put(async (req, res, next) => {
    try {
        const editBoard = await boardService.editBoard(req.params.id, req.body);
        res.status(http_status_codes_1.StatusCodes.OK).json(editBoard);
    }
    catch (e) {
        next(e);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await tasksService.deleteBoardTasks(req.params.id);
        await boardService.deleteBoard(req.params.id);
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=board.router.js.map