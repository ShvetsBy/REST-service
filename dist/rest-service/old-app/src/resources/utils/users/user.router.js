"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const user_intity_1 = require("../../entities/user.intity");
const usersService = require("./user.service");
const router = express_1.default.Router();
exports.router = router;
router.route('/').get(async (_req, res, next) => {
    try {
        const users = await usersService.getAll();
        res.status(http_status_codes_1.StatusCodes.OK).json(users);
    }
    catch (e) {
        next(e);
    }
});
router.route('/:id').get(async (req, res, next) => {
    try {
        const user = await usersService.getUserById(req.params.id);
        res.status(http_status_codes_1.StatusCodes.OK).json(user);
    }
    catch (e) {
        next(e);
    }
});
router.route('/').post(async (req, res, next) => {
    try {
        const newUser = await usersService.createUser(req.body);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(user_intity_1.User.toResponce(newUser));
    }
    catch (e) {
        next(e);
    }
});
router.route('/:id').put(async (req, res, next) => {
    try {
        const editUser = await usersService.editUser(req.body, req.params.id);
        res.status(http_status_codes_1.StatusCodes.OK).json(editUser);
    }
    catch (e) {
        next(e);
    }
});
router.route('/:id').delete(async (req, res, next) => {
    try {
        await usersService.clearTasks(req.params.id);
        await usersService.deleteUser(req.params.id);
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=user.router.js.map