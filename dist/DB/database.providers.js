"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const configOrm_1 = require("../configOrm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        imports: [config_1.ConfigModule],
        useFactory: async () => await typeorm_1.createConnection(configOrm_1.default),
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=database.providers.js.map