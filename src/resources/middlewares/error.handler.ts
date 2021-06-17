import { ErrorRequestHandler } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { logger } from '../utils/logger';

const errorHandler: ErrorRequestHandler = ((err, _req, res, _next) => {
  logger.error(err.message);

  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
  _next();
});

export { errorHandler };
