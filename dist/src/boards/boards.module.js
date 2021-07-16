"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsModule = void 0;
const common_1 = require("@nestjs/common");
const boards_service_1 = require("./boards.service");
const boards_controller_1 = require("./boards.controller");
const boards_providers_1 = require("./boards.providers");
const database_module_1 = require("../../DB/database.module");
const tasks_providers_1 = require("../tasks/tasks.providers");
const tasks_service_1 = require("../tasks/tasks.service");
let BoardsModule = class BoardsModule {
};
BoardsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        providers: [...boards_providers_1.boardProviders, boards_service_1.BoardsService, ...tasks_providers_1.taskProviders, tasks_service_1.TasksService],
        controllers: [boards_controller_1.BoardsController],
        exports: [boards_service_1.BoardsService],
    })
], BoardsModule);
exports.BoardsModule = BoardsModule;
//# sourceMappingURL=boards.module.js.map