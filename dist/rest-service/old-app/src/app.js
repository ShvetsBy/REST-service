"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = require("swagger-ui-express");
const path_1 = require("path");
const yamljs_1 = require("yamljs");
const user_router_1 = require("./resources/users/user.router");
const board_router_1 = require("./resources/boards/board.router");
const task_router_1 = require("./resources/tasks/task.router");
const login_router_1 = require("./resources/login/login.router");
const error_handler_1 = require("./resources/middlewares/error.handler");
const req_res_handler_1 = require("./resources/middlewares/req-res.handler");
const customError_1 = require("./resources/utils/customError");
const check_token_1 = require("./resources/middlewares/check.token");
const app = express_1.default();
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(req_res_handler_1.requestResponceHandler);
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/login', login_router_1.router);
app.use(check_token_1.checkToken);
app.use('/users', user_router_1.router);
app.use('/boards', [board_router_1.router, task_router_1.router]);
app.use('*', () => {
    throw new customError_1.CustomError(404, 'Page not found!');
});
app.use(error_handler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map