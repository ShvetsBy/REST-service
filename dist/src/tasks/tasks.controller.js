"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const not_found_error_1 = require("../errors/not-found.error");
const auth_guard_1 = require("../auth/auth.guard");
const http_status_codes_1 = require("http-status-codes");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async create(boardId, createTaskDto) {
        return this.tasksService.create(boardId, createTaskDto);
    }
    async findAll(boardId) {
        const tasks = await this.tasksService.findAll(boardId);
        if (tasks) {
            return tasks;
        }
        else {
            throw new not_found_error_1.NotFound('Tasks');
        }
    }
    async findOne(boardId, id) {
        const task = await this.tasksService.findOne(boardId, id);
        if (task) {
            return task;
        }
        else {
            throw new not_found_error_1.NotFound('Task');
        }
    }
    async update(id, updateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }
    async remove(id) {
        return this.tasksService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(http_status_codes_1.StatusCodes.CREATED),
    __param(0, common_1.Param('boardId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(http_status_codes_1.StatusCodes.OK),
    __param(0, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    common_1.HttpCode(http_status_codes_1.StatusCodes.OK),
    __param(0, common_1.Param('boardId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(http_status_codes_1.StatusCodes.OK),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(http_status_codes_1.StatusCodes.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "remove", null);
TasksController = __decorate([
    common_1.Controller('boards/:boardId/tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map