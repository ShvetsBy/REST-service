"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const bcrypt = require("bcrypt");
class CreateUserDto {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
    static async toResponce(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map