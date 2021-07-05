"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryToConnect = void 0;
const typeorm_1 = require("typeorm");
const logger_1 = require("./logger");
const configOrm_1 = require("../../common/configOrm");
const connectToDB = async () => {
    let connection;
    try {
        connection = typeorm_1.getConnection();
    }
    catch (e) {
        logger_1.logger.log('info', e);
    }
    try {
        if (connection) {
            if (!connection.isConnected)
                await connection.connect();
        }
        else {
            await typeorm_1.createConnection(configOrm_1.default);
        }
        console.log('connection ok');
    }
    catch (e) {
        logger_1.logger.log('info', e);
    }
};
const TryToConnect = async (cb) => {
    try {
        await connectToDB();
        cb();
    }
    catch (e) {
        logger_1.logger.log('info', e);
    }
};
exports.TryToConnect = TryToConnect;
//# sourceMappingURL=db.js.map