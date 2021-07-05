"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const logger_1 = require("../utils/logger");
const errorHandler = ((err, _req, res, _next) => {
    logger_1.logger.error(err.message);
    if (err.message === 'invalid token' || 'invalid signature') {
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send(http_status_codes_1.ReasonPhrases.UNAUTHORIZED);
    }
    if (err.status) {
        res.status(err.status).send(err.message);
    }
    else {
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .send(http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
    _next();
});
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map