"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_OUTPUT = exports.LOG_OUTPUT = exports.AUTH_MODE = exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
_a = process.env, exports.PORT = _a.PORT, exports.NODE_ENV = _a.NODE_ENV, exports.MONGO_CONNECTION_STRING = _a.MONGO_CONNECTION_STRING, exports.JWT_SECRET_KEY = _a.JWT_SECRET_KEY, exports.AUTH_MODE = _a.AUTH_MODE, exports.LOG_OUTPUT = _a.LOG_OUTPUT, exports.ERROR_OUTPUT = _a.ERROR_OUTPUT;
//# sourceMappingURL=config.js.map