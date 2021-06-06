import express from 'express';
import * as boardService from './board.service.js';
import * as tasksService from '../tasks/task.service.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const boards = await boardService.getAll();
  if (boards) {
    res.status(StatusCodes.OK).json(boards);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
});

router.route('/:id').get(async (req, res) => {
  // TODO delete try-catch
  try {
    const board = await boardService.getBoardById(req.params.id);
    if (board) {
      res.status(StatusCodes.OK).json(board);
    }
  } catch (e) {
    res.status(StatusCodes.NOT_FOUND).json('No board found');
  }
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardService.createBoard(req.body);
  if (newBoard) {
    res.status(StatusCodes.CREATED).json(newBoard);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
});

router.route('/:id').put(async (req, res) => {
  const editBoard = await boardService.editBoard(req.params.id, req.body);
  if (editBoard) {
    res.status(StatusCodes.OK).json(editBoard);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
  
});

router.delete('/:id', async (req, res) => {
  await boardService.deleteBoard(req.params.id);
  await tasksService.deleteBoardTasks(req.params.id);
  res.status(StatusCodes.NO_CONTENT).send();
});

export { router };
