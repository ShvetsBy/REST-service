"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncaughtExceptionHandler = void 0;
const logger_1 = require("../utils/logger");
const uncaughtExceptionHandler = (err) => {
    logger_1.logger.log('error', 'Uncaught Exception', err.message);
    process.exit(1);
};
exports.uncaughtExceptionHandler = uncaughtExceptionHandler;
//# sourceMappingURL=exception.handler.js.map