// const router = require('express').Router();
// const User = require('./user.model');
// const taskService = require('./task.service');

import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as taskService from './task.service';

const router = express.Router();

router.route('/:boardId/tasks').get(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const tasks = await taskService.getAll(boardId);
    if (tasks) {
      res.status(StatusCodes.OK).json(tasks);
    } else {
      res.status(StatusCodes.NOT_FOUND);
    }
  } catch (e) {
    next(e);
  }
});

router.route('/:boardId/tasks/:id').get(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const task = await taskService.getTaskById(req.params.id, boardId);
    console.log('current task id', req.params.id);
    if (task) {
      res.status(StatusCodes.OK).json(task);
    } else {
      res.status(StatusCodes.NOT_FOUND).json('No task found');
    }
  } catch (e) {
    // res.status(StatusCodes.NOT_FOUND).json('No task found');
    next(e);
  }
});

router.route('/:boardId/tasks').post(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const newTask = await taskService.createTask(boardId, req.body);
    res.status(StatusCodes.CREATED).json(newTask);
  } catch (e) {
    next(e);
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const editTask = await taskService.editTask(req.body, req.params.id, boardId);
    res.status(StatusCodes.OK).json(editTask);
  } catch (e) {
    next(e);
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res, next) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (e) {
    next(e);
  }
});

export { router };
