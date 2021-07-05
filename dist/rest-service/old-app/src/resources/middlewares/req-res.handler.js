"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResponceHandler = void 0;
const stream_1 = require("stream");
const logger_1 = require("../utils/logger");
const requestResponceHandler = (req, res, next) => {
    const { method, originalUrl, body, query, params, headers, } = req;
    next();
    stream_1.finished(res, () => {
        const { statusCode } = res;
        const info = {
            method,
            path: originalUrl,
            statusCode,
            body,
            query,
            params,
            headers,
        };
        logger_1.logger.log('info', 'Data:', info);
    });
};
exports.requestResponceHandler = requestResponceHandler;
//# sourceMappingURL=req-res.handler.js.map