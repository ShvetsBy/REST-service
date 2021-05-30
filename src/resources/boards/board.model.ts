
import * as uuid from 'uuid';

interface IBoards {
  id?: string;
  title?: string;
  columns?: object;

};

/**
 * A class to represent a board.
@class
@constructor
* @param {String} boardId – auto-generated task id
* @param {String} title – board name
* @param {Array<Object>} columns – task list
*/
class Board {
  

  constructor({ 
    
    title = 'Title', 
    columns = {} }
     = {}) {
    this.id = uuid.v4();
    this.title = title;
    this.columns = columns;
  }
}

export { Board, IBoards };
