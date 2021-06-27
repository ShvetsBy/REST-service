import * as uuid from 'uuid';
import { ITask } from './task.interface';
/**
 * A class to represent a task.
@class
@constructor
* @param {String} taskId – auto-generated task id
* @param {String} title – task name
* @param {number} order – a place of item in list
* @param {String} description – the task content
* @param {String} userId – id of user, who created task
* @param {String} columnId — id of task place on the board
*/
class Task implements ITask {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  columnId: string;

  boardId: string;

  constructor({
    title, order, description, userId, columnId, boardId,
  }: ITask) {
    this.id = uuid.v4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId;
    this.boardId = boardId;
  }
}

export { Task };
