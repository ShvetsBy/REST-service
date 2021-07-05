"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const typeorm_1 = require("typeorm");
const user_intity_1 = require("../entities/user.intity");
const createAdmin = async () => {
    const userRepository = typeorm_1.getRepository(user_intity_1.User);
    const user = await userRepository.create({
        name: 'admin',
        login: 'admin',
        password: 'admin',
    });
    userRepository.save(user);
};
exports.createAdmin = createAdmin;
//# sourceMappingURL=createDefaultAdmin.js.map