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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(boardId, createTaskDto) {
        const newTask = await this.taskRepository.create(createTaskDto);
        newTask.boardId = boardId;
        const savedTask = await this.taskRepository.save(newTask);
        return savedTask;
    }
    async findAll(boardId) {
        return await this.taskRepository.find({ where: { boardId } });
    }
    async findOne(boardId, id) {
        return await this.taskRepository.findOne(id, { where: { boardId } });
    }
    async update(id, updateTaskDto) {
        const updatedTask = await this.taskRepository.update(id, updateTaskDto);
        return updatedTask.raw;
    }
    async remove(id) {
        await this.taskRepository.delete(id);
    }
    async deleteBoardTasks(boardId) {
        try {
            const tasks = await this.findAll(boardId);
            if (tasks) {
                (await tasks).map((task) => {
                    if (task.boardId === boardId) {
                        this.remove(task.id);
                        return true;
                    }
                    return false;
                });
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async clearTasks(id) {
        await this.taskRepository
            .createQueryBuilder()
            .update(task_entity_1.Task)
            .set({ userId: null })
            .where('userId = :id', { id })
            .execute();
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('TASK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map