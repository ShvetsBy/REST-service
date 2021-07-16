"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const common_1 = require("@nestjs/common");
class NotFound extends common_1.HttpException {
    constructor(subject) {
        super(`${subject} not found`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NotFound = NotFound;
//# sourceMappingURL=not-found.error.js.map