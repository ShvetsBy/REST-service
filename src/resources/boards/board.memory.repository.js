const boards = require('../../data/boards');
const Board = require('./board.model');

const getAll = async () => {
  try {
    return boards;
  } catch (e) {
    throw new Error(e);
  }
};

const getBoardById = async (id) => {
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

const createBoard = async (board) => {
  try {
    const newBoard = await new Board(board);

    boards.push(newBoard);
    return newBoard;
  } catch (e) {
    throw new Error(e);
  }
};

const editBoard = async (id, board) => {
  try {
    const BoardToEdit = boards.find((object) => object.id === id);

    BoardToEdit.title = board.title;
    BoardToEdit.columns = board.columns;

    return BoardToEdit;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteBoard = async (id) => {
  try {
    const index = boards.indexOf((item) => item.id === id);

    boards.splice(index, 1);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { getAll, getBoardById, createBoard, editBoard, deleteBoard };
