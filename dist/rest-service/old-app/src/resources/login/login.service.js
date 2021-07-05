"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const loginRepo = require("./login.repository");
const generateToken = (login, password) => loginRepo.generateToken(login, password);
exports.generateToken = generateToken;
//# sourceMappingURL=login.service.js.map