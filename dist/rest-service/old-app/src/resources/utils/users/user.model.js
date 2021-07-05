"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldUser = void 0;
const uuid = require("uuid");
class OldUser {
    constructor({ name, login, password }) {
        this.id = uuid.v4();
        this.name = name;
        this.login = login;
        this.password = password;
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.OldUser = OldUser;
//# sourceMappingURL=user.model.js.map