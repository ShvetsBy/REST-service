"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTasks = exports.deleteUser = exports.editUser = exports.createUser = exports.getUserById = exports.getAll = void 0;
const usersRepo = require("./user.memory.repository");
const getAll = () => usersRepo.getAll();
exports.getAll = getAll;
const getUserById = (id) => usersRepo.getUserById(id);
exports.getUserById = getUserById;
const createUser = (user) => usersRepo.createUser(user);
exports.createUser = createUser;
const editUser = (user, id) => usersRepo.editUser(user, id);
exports.editUser = editUser;
const deleteUser = (id) => usersRepo.deleteUser(id);
exports.deleteUser = deleteUser;
const clearTasks = (id) => usersRepo.clearTasks(id);
exports.clearTasks = clearTasks;
//# sourceMappingURL=user.service.js.map