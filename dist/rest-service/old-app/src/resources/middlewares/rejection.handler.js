"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unhandledRejectionHandler = void 0;
const logger_1 = require("../utils/logger");
const unhandledRejectionHandler = (err) => {
    logger_1.logger.log('error', 'Unhandled Rejection:', err.message);
    process.exit(1);
};
exports.unhandledRejectionHandler = unhandledRejectionHandler;
//# sourceMappingURL=rejection.handler.js.map