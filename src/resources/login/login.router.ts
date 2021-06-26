import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as loginService from './login.service';

const router = express.Router();

router.route('/').post(async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const newToken = await loginService.generateToken(login, password);
    // const payload = { id: newToken.id, login: newToken.login };
    // console.log('router:', payload);
    res.status(StatusCodes.OK).json(newToken);
  } catch (e) {
    next(e);
  }
});

export { router };
