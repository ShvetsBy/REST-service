"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const config_1 = require("../../common/config");
const user_intity_1 = require("../entities/user.intity");
const generateToken = async (login, password) => {
    try {
        const userRepo = typeorm_1.getRepository(user_intity_1.User);
        const user = await userRepo.findOne({ login });
        if (user && await bcrypt_1.default.compare(String(password), String(user === null || user === void 0 ? void 0 : user.password))) {
            const payload = { userId: user === null || user === void 0 ? void 0 : user.id, login: user === null || user === void 0 ? void 0 : user.login };
            const token = jsonwebtoken_1.default.sign(payload, String(config_1.JWT_SECRET_KEY));
            return token;
        }
        return false;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.generateToken = generateToken;
//# sourceMappingURL=login.repository.js.map