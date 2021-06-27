import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import { logger } from '../utils/logger';

const requestResponceHandler = (req: Request, res: Response, next: NextFunction): void => {
  const {
    method, originalUrl, body, query, params, headers,
  } = req;

  next();

  finished(res, () => {
    const { statusCode } = res;
    const info = {
      method,
      path: originalUrl,
      statusCode,
      body,
      query,
      params,
      headers,
    };

    logger.log('info', 'Data:', info);
  });
};

export { requestResponceHandler };
