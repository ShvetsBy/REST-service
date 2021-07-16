"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../DB/database.module");
const users_providers_1 = require("./users.providers");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const tasks_providers_1 = require("../tasks/tasks.providers");
const tasks_service_1 = require("../tasks/tasks.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        providers: [...users_providers_1.userProviders, users_service_1.UserService, ...tasks_providers_1.taskProviders, tasks_service_1.TasksService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=users.module.js.map