import express from 'express';
import { User }  from './user.model.js';
import * as usersService from './user.service.js';
import { StatusCodes } from 'http-status-codes';




const router = express.Router();

router.route('/').get(async (_req, res, next) => {
  // throw new Error ('test');
  try {
    const users = await usersService.getAll();
    res.status(StatusCodes.OK).json(users.map(User.toResponse));
  }
  catch (e) {
    next(e)
  }
  
});

router.route('/:id').get(async (req, res, next) => {

  try {
    const user = await usersService.getUserById(req.params.id);
      res.status(StatusCodes.OK).json(user);
  } catch(e) {
    next(e);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const newUser = await usersService.createUser(req.body);
    res.status(StatusCodes.CREATED).json(User.toResponse(newUser));
  }
  catch (e) {
    next(e)
  }
  
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const editUser = await usersService.editUser(req.body, req.params.id);
    res.status(StatusCodes.OK).json(editUser);  
  }
  catch (e) {
    next(e)
  }
  
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await usersService.clearTasks(req.params.id);
    await usersService.deleteUser(req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();  
  }
  catch (e) {
    next(e)
  }
});

export { router} ;
