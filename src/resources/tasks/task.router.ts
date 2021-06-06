// const router = require('express').Router();
// const User = require('./user.model');
// const taskService = require('./task.service');

import express from 'express';
import * as taskService from './task.service.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.route('/:boardId/tasks').get(async (_req, res) => {
  const tasks = await taskService.getAll();
  if (tasks) {
    res.status(StatusCodes.OK).json(tasks);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }

});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (task) {
      res.status(StatusCodes.OK).json(task);
    }
  } catch (e) {
    res.status(StatusCodes.NOT_FOUND).json('No task found');
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const { boardId } = req.params;
  const newTask = await taskService.createTask(req.body, boardId);
  if (newTask) {
    res.status(StatusCodes.CREATED).json(newTask);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
  
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const editTask = await taskService.editTask(req.body, req.params.id, );
  if (editTask) {
    res.status(StatusCodes.OK).json(editTask);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.status(StatusCodes.NO_CONTENT).send();
});

export { router };
