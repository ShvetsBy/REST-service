import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { finished } from 'stream';

const requestResponceHandler = (req: Request, res: Response, next: NextFunction): void => {
    const { method, originalUrl, body, query, params, headers } = req;
  
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
      }
  
      logger('info', 'Incoming request:', info);
    })
  }

export { requestResponceHandler };