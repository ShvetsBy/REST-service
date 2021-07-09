"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_winston_logger_1 = require("nestjs-winston-logger");
const helmet = require("helmet");
const globalLogger_1 = require("../src/utils/logger/globalLogger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.useLogger(globalLogger_1.globalLogger);
    nestjs_winston_logger_1.configMorgan.appendMorganToken('reqId', nestjs_winston_logger_1.TOKEN_TYPE.Request, 'reqId');
    app.use(nestjs_winston_logger_1.morganRequestLogger(globalLogger_1.globalLogger));
    app.use(nestjs_winston_logger_1.morganResponseLogger(globalLogger_1.globalLogger));
    app.useGlobalInterceptors(new nestjs_winston_logger_1.LoggingInterceptor(globalLogger_1.globalLogger));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map