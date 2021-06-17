import { Board } from './board.model';
import { IBoard } from './board.interface';

const boards: IBoard[] = [];

/**
 * Returns the list of boards.
 * no params required
 * @async
 * @throws {string} error message
 // eslint-disable-next-line max-len
 * @returns {Promise<Array>} List of boards.
 Every board is an object, which contains 2 strings: id and title and object with columns.
 */
const getAll = async () => {
  try {
    return boards;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Returns one specific board by id.
 * @async
 * @param {string} id – board id.
 * @throws {string} error message
 * @returns {Promise<Object>} Object with board content: id, title and columns with content.
 */
const getBoardById = async (id: string) => {
  try {
    const board = boards.find((object) => object.id === id);

    if (!board) {
      throw new Error("Can't find such board");
    }
    return board;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Creates new board.
 * @async
 * @param {Object} board – object consists of 2 string board title and object with content.
 * @throws {string} error message
 * @returns {Promise<Object>} new board with id, title and content.
 */
const createBoard = async (board: IBoard) => {
  try {
    const newBoard = await new Board(board);
    boards.push(newBoard);
    return newBoard;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * update board's items.
 * @async
 * @param {string} id – board uniq id.
 * @param {Object} board – object consists of 2 string board title and object with content.
 * @throws {string} error message
 * @returns {Promise<Object>} updated board with id, title and content.
 */
const editBoard = async (id: string, board: IBoard) => {
  try {
    const BoardToEdit = boards.find((object) => object.id === id);
    if (BoardToEdit) {
      BoardToEdit.title = board.title;
      BoardToEdit.columns = board.columns;
      return BoardToEdit;
    // eslint-disable-next-line consistent-return
    } return;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Delete existing task.
 * @async
 * @param {string} id – task uniq id.
 * @return {undefined}
 */
const deleteBoard = async (id: string) => {
  try {
    const BoardToDelete = boards.find((object) => object.id === id);
    if (BoardToDelete) {
      const index = boards.findIndex((item) => item.id === id);
      boards.splice(index, 1);
    }
  } catch (e) {
    throw new Error(e);
  }
};
export {
  getAll, getBoardById, createBoard, editBoard, deleteBoard,
};
