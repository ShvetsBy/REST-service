"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_winston_logger_1 = require("nestjs-winston-logger");
const helmet = require("helmet");
const globalLogger_1 = require("../src/utils/logger/globalLogger");
const http_exception_filter_1 = require("./errors/http-exception.filter");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    if (process.env.USE_FASTIFY === 'true') {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
        app.use(helmet());
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
        app.useLogger(globalLogger_1.globalLogger);
        nestjs_winston_logger_1.configMorgan.appendMorganToken('reqId', nestjs_winston_logger_1.TOKEN_TYPE.Request, 'reqId');
        app.use(nestjs_winston_logger_1.morganRequestLogger(globalLogger_1.globalLogger));
        app.use(nestjs_winston_logger_1.morganResponseLogger(globalLogger_1.globalLogger));
        app.useGlobalInterceptors(new nestjs_winston_logger_1.LoggingInterceptor(globalLogger_1.globalLogger));
        console.log('fast');
        await app.listen(process.env.PORT);
    }
    else {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.use(helmet());
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
        app.useLogger(globalLogger_1.globalLogger);
        nestjs_winston_logger_1.configMorgan.appendMorganToken('reqId', nestjs_winston_logger_1.TOKEN_TYPE.Request, 'reqId');
        app.use(nestjs_winston_logger_1.morganRequestLogger(globalLogger_1.globalLogger));
        app.use(nestjs_winston_logger_1.morganResponseLogger(globalLogger_1.globalLogger));
        app.useGlobalInterceptors(new nestjs_winston_logger_1.LoggingInterceptor(globalLogger_1.globalLogger));
        console.log('express');
        await app.listen(process.env.PORT);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map