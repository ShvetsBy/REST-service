import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../entities/user.intity';
import * as usersService from './user.service';

const router = express.Router();

router.route('/').get(async (_req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(StatusCodes.OK).json(users);
  } catch (e) {
    next(e);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.getUserById(req.params.id);
    res.status(StatusCodes.OK).json(user);
  } catch (e) {
    next(e);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const newUser = await usersService.createUser(req.body);
    res.status(StatusCodes.CREATED).json(User.toResponce(newUser));
    //res.status(StatusCodes.CREATED).send();
  } catch (e) {
    next(e);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const editUser = await usersService.editUser(req.body, req.params.id);
    res.status(StatusCodes.OK).json(editUser);
  } catch (e) {
    next(e);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    // await usersService.clearTasks(req.params.id);
   await usersService.deleteUser(req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (e) {
    next(e);
  }
});

export { router };
