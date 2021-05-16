const router = require('express').Router();
// const User = require('./user.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();

  res.status(200).json(tasks);
});

// router.route('/:id').get(async (req, res) => {
//   const user = await usersService.getUserById(req.params.id);
//   res.status(200).json(user);
// });

// router.route('/').post(async (req, res) => {
//   const newUser = await usersService.createUser(req.body);
//   res.status(201).json(User.toResponse(newUser));
// });

// router.route('/:id').put(async (req, res) => {
//   const editUser = await usersService.editUser(req.params.id, req.body);

//   res.status(200).json(editUser);
// });

// router.route('/:id').delete(async (req, res) => {
//   await usersService.deleteUser(req.params.id);
//   res.status(204).send();
// });

module.exports = router;
