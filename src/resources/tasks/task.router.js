const router = require('express').Router();
// const User = require('./user.model');
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(200).json(tasks);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const task = await taskService.getTaskById(req.params.id);
  res.status(200).json(task);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const { boardId } = req.params;
  const newTask = await taskService.createTask(req.body, boardId);
  res.status(201).json(newTask);
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const editTask = await taskService.editTask(req.params.id, req.body);

  res.status(200).json(editTask);
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.status(204).send();
});

module.exports = router;
