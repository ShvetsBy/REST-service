"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTasks = exports.deleteUser = exports.editUser = exports.createUser = exports.getUserById = exports.getAll = void 0;
const typeorm_1 = require("typeorm");
const user_intity_1 = require("../../entities/user.intity");
const task_entity_1 = require("../../entities/task.entity");
const getAll = async () => {
    const userRepo = typeorm_1.getRepository(user_intity_1.User);
    return userRepo.find({ where: {} });
};
exports.getAll = getAll;
const createUser = async (dto) => {
    try {
        const userRepo = typeorm_1.getRepository(user_intity_1.User);
        const newUser = userRepo.create(dto);
        const savedUser = userRepo.save(newUser);
        return savedUser;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.createUser = createUser;
const getUserById = async (id) => {
    try {
        const userRepo = typeorm_1.getRepository(user_intity_1.User);
        const user = userRepo.findOne(id);
        if (!user) {
            throw new Error("Can't find such user");
        }
        return user;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.getUserById = getUserById;
const editUser = async (dto, id) => {
    const userRepo = typeorm_1.getRepository(user_intity_1.User);
    const user = await userRepo.findOne(id);
    if (user === undefined)
        return 'NOT_FOUND';
    const updatedUser = await userRepo.update(id, dto);
    return updatedUser.raw;
};
exports.editUser = editUser;
const deleteUser = async (id) => {
    const userRepo = typeorm_1.getRepository(user_intity_1.User);
    await userRepo.delete(id);
};
exports.deleteUser = deleteUser;
const clearTasks = async (id) => {
    try {
        const taskRepository = typeorm_1.getRepository(task_entity_1.Task);
        await taskRepository.createQueryBuilder()
            .update(task_entity_1.Task)
            .set({ userId: null })
            .where('userId = :id', { id })
            .execute()
            .catch(() => { });
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.clearTasks = clearTasks;
//# sourceMappingURL=user.memory.repository.js.map