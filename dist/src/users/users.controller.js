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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const not_found_error_1 = require("../errors/not-found.error");
const tasks_service_1 = require("../tasks/tasks.service");
const auth_guard_1 = require("../auth/auth.guard");
const http_status_codes_1 = require("http-status-codes");
let UsersController = class UsersController {
    constructor(userService, tasksService) {
        this.userService = userService;
        this.tasksService = tasksService;
    }
    async create(createUserDto) {
        const newUser = this.userService.create(createUserDto);
        return create_user_dto_1.CreateUserDto.toResponce(await newUser);
    }
    async findAll() {
        return this.userService.findAll();
    }
    async findOne(id) {
        const user = await this.userService.findOne(id);
        if (user) {
            return user;
        }
        else {
            throw new not_found_error_1.NotFound('User');
        }
    }
    async update(id, updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
    async remove(id) {
        this.tasksService.clearTasks(id);
        return this.userService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(http_status_codes_1.StatusCodes.CREATED),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(http_status_codes_1.StatusCodes.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    common_1.HttpCode(http_status_codes_1.StatusCodes.OK),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(http_status_codes_1.StatusCodes.OK),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(http_status_codes_1.StatusCodes.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    common_1.Controller('users'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [users_service_1.UserService,
        tasks_service_1.TasksService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map