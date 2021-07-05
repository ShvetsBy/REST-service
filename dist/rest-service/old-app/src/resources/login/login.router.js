"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const loginService = require("./login.service");
const router = express_1.default.Router();
exports.router = router;
router.route('/').post(async (req, res, next) => {
    try {
        const { login, password } = req.body;
        const newToken = await loginService.generateToken(login, password);
        if (!newToken) {
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json(http_status_codes_1.ReasonPhrases.FORBIDDEN);
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({ token: newToken });
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=login.router.js.map