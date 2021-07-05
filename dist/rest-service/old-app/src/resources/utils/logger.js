"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    exitOnError: true,
    transports: [
        new winston_1.default.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'logs/combined.log' }),
    ],
});
exports.logger = logger;
logger.add(new winston_1.default.transports.Console());
//# sourceMappingURL=logger.js.map