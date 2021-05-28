const uuid = require('uuid');

/**
 * A class to represent a task.
@class
@constructor
* @param {String} taskId – auto-generated task id
* @param {String} title – task name
* @param {number} order – a place of item in list
* @param {String} description – the task content
* @param {String} userID – id of user, who created task
* @param {String} columnId — id of task place on the board
*/
class Task {
  constructor({
    title = 'Best task',
    order = 0,
    description = 'deadline passed yesterday',
    userId = null,
    columnId = null,
  } = {}) {
    this.id = uuid.v4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId;
  }
}

module.exports = Task;
