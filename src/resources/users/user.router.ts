import express from 'express';
import { User }  from './user.model.js';
import * as usersService from './user.service.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  if (users) {
    res.status(StatusCodes.OK).json(users.map(User.toResponse));
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
  
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  if (user) {
    res.status(StatusCodes.OK).json(user);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.createUser(req.body);
  if (newUser) {
    res.status(StatusCodes.CREATED).json(User.toResponse(newUser));
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
});

router.route('/:id').put(async (req, res) => {
  const editUser = await usersService.editUser(req.body, req.params.id);
  if (editUser) {
    res.status(StatusCodes.OK).json(editUser);
  } else {
    res.status(StatusCodes.NOT_FOUND)
  }
});

router.route('/:id').delete(async (req, res) => {
  // await usersService.clearTasks(req.params.id);
  await usersService.deleteUser(req.params.id);

  res.status(StatusCodes.NO_CONTENT).send();
});

export { router} ;
