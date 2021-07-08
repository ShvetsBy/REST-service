"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_winston_logger_1 = require("nestjs-winston-logger");
const winston_1 = require("winston");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    const globalLogger = new nestjs_winston_logger_1.NestjsWinstonLoggerService({
        format: winston_1.format.combine(winston_1.format.timestamp({ format: 'isoDateTime' }), winston_1.format.json(), winston_1.format.colorize({ all: true })),
        transports: [
            new winston_1.transports.File({ filename: 'logs/error.log', level: 'error' }),
            new winston_1.transports.File({ filename: 'logs/combined.log' }),
            new winston_1.transports.Console(),
        ],
    });
    app.useLogger(globalLogger);
    app.use(nestjs_winston_logger_1.appendIdToRequest);
    app.use(nestjs_winston_logger_1.appendRequestIdToLogger(globalLogger));
    nestjs_winston_logger_1.configMorgan.appendMorganToken('reqId', nestjs_winston_logger_1.TOKEN_TYPE.Request, 'reqId');
    app.use(nestjs_winston_logger_1.morganRequestLogger(globalLogger));
    app.use(nestjs_winston_logger_1.morganResponseLogger(globalLogger));
    app.useGlobalInterceptors(new nestjs_winston_logger_1.LoggingInterceptor(globalLogger));
    const port = process.env.PORT || 4000;
    await app.listen(port).then(() => {
        console.log(`🚀 Server ready at ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map