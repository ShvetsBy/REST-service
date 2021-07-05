"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid = require("uuid");
class Task {
    constructor({ title, order, description, userId, columnId, boardId, }) {
        this.id = uuid.v4();
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.columnId = columnId;
        this.boardId = boardId;
    }
}
exports.Task = Task;
//# sourceMappingURL=task.model.js.map