"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./common/config");
const app_1 = require("./app");
const exception_handler_1 = require("./resources/middlewares/exception.handler");
const rejection_handler_1 = require("./resources/middlewares/rejection.handler");
const db_1 = require("./resources/utils/db");
const createDefaultAdmin_1 = require("./resources/utils/createDefaultAdmin");
process.on('uncaughtException', exception_handler_1.uncaughtExceptionHandler);
process.on('unhandledRejection', rejection_handler_1.unhandledRejectionHandler);
db_1.TryToConnect(() => {
    app_1.default.listen(config_1.PORT, () => console.log(`App is running on http://localhost:${config_1.PORT}`));
    createDefaultAdmin_1.createAdmin();
});
//# sourceMappingURL=server.js.map