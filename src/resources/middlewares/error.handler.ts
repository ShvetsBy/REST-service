import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { logger } from '../utils/logger';

function errorHandler (err: Error, _req: Request, res: Response) {
    logger.error(err.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.json({
        message: err.message,
        status: ReasonPhrases.INTERNAL_SERVER_ERROR
    });
}

export { errorHandler }