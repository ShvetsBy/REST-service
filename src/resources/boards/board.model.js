const uuid = require('uuid');

class Board {
  constructor({ title = 'Title', columns = {} } = {}) {
    this.id = uuid.v4();
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
