const uuid = require('uuid');

class Task {
  constructor({
    order = 0,
    title = 'Best task',
    description = 'deadline passed yesterday',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = uuid.v4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
