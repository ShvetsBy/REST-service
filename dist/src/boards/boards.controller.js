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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = require("../errors/not-found.error");
const boards_service_1 = require("./boards.service");
const createboard_dto_1 = require("./dto/createboard.dto");
const updateboard_dto_1 = require("./dto/updateboard.dto");
const tasks_service_1 = require("../tasks/tasks.service");
const auth_guard_1 = require("../auth/auth.guard");
let BoardsController = class BoardsController {
    constructor(boardService, tasksService) {
        this.boardService = boardService;
        this.tasksService = tasksService;
    }
    create(createBoardDto) {
        return this.boardService.create(createBoardDto);
    }
    async findAll() {
        const boards = await this.boardService.findAll();
        if (boards) {
            return boards;
        }
        else {
            throw new not_found_error_1.NotFound('Boards');
        }
    }
    async findOne(id) {
        const board = await this.boardService.findOne(id);
        if (board) {
            return board;
        }
        else {
            throw new not_found_error_1.NotFound('Board');
        }
    }
    update(id, updateBoardDto) {
        return this.boardService.update(id, updateBoardDto);
    }
    remove(id) {
        this.tasksService.deleteBoardTasks(id);
        return this.boardService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createboard_dto_1.CreateBoardDto]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateboard_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "remove", null);
BoardsController = __decorate([
    common_1.Controller('boards'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [boards_service_1.BoardsService,
        tasks_service_1.TasksService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map