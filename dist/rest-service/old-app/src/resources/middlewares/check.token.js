"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../../common/config");
const checkToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (authHeader !== undefined) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send(http_status_codes_1.ReasonPhrases.UNAUTHORIZED);
        }
        jsonwebtoken_1.default.verify(token, String(config_1.JWT_SECRET_KEY));
        return next();
    }
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send(http_status_codes_1.ReasonPhrases.UNAUTHORIZED);
};
exports.checkToken = checkToken;
//# sourceMappingURL=check.token.js.map