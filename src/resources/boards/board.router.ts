import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as boardService from './board.service';
// import * as tasksService from '../tasks/task.service';

const router = express.Router();

router.route('/').get(async (_req, res, next) => {
  try {
    const boards = await boardService.getAll();
    res.status(StatusCodes.OK).json(boards);
  } catch (e) {
    next(e);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardService.getBoardById(req.params.id);
    res.status(StatusCodes.OK).json(board);
  } catch (e) {
    res.status(StatusCodes.NOT_FOUND).json('No board found');
    next(e);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const newBoard = await boardService.createBoard(req.body);
    res.status(StatusCodes.CREATED).json(newBoard);
  } catch (e) {
    next(e);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const editBoard = await boardService.editBoard(req.params.id, req.body);
    res.status(StatusCodes.OK).json(editBoard);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await boardService.deleteBoard(req.params.id);
    // await tasksService.deleteBoardTasks(req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (e) {
    next(e);
  }
});

export { router };
