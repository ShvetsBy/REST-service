import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { JWT_SECRET_KEY } from '../../common/config';

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');
  if (authHeader !== undefined) {
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) {
      return res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    } jwt.verify(token, String(JWT_SECRET_KEY));
    return next();
  } return res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
};

export { checkToken };
