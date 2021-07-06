import express from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import * as loginService from './login.service';

const router = express.Router();

router.route('/').post(async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const newToken = await loginService.generateToken(login, password);

    if (!newToken) {
      res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN);
    } res.status(StatusCodes.OK).json({ token: newToken });
  } catch (e) {
    next(e);
  }
});

export { router };
