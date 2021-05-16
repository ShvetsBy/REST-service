const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();

  res.status(200).json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoardById(req.params.id);
  res.status(200).json(board);
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardService.createBoard(req.body);
  res.status(201).json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const editBoard = await boardService.editBoard(req.params.id, req.body);

  res.status(200).json(editBoard);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.deleteBoard(req.params.id);
  res.status(204).send();
});

module.exports = router;
