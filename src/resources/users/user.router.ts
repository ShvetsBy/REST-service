import express from 'express';
import { User }  from './user.model.js';
import * as usersService from './user.service.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  res.status(200).json(user);
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.createUser(req.body);
  res.status(201).json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const editUser = await usersService.editUser(req.params.id, req.body);

  res.status(200).json(editUser);
});

router.route('/:id').delete(async (req, res) => {
  // const isCleared = await usersService.clearTaskAssignee(req.params.id);
  await usersService.deleteUser(req.params.id);

  res.status(204).send();
});

export { router} ;
