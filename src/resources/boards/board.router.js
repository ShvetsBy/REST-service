const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(200).json(boards);
});

router.route('/:id').get(async (req, res) => {
  // TODO delete try-catch
  try {
    const board = await boardService.getBoardById(req.params.id);
    if (board) {
      res.status(200).json(board);
    }
  } catch (e) {
    res.status(404).json('No board found');
  }
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardService.createBoard(req.body);
  res.status(201).json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const editBoard = await boardService.editBoard(req.params.id, req.body);

  res.status(200).json(editBoard);
});

router.delete('/:id', async (req, res) => {
  // await boardService.deleteBoard(req.params.id);
  // res.status(204).send();
  await boardService.deleteBoard(req.params.id);

  res.status(204).send();
});

module.exports = router;
