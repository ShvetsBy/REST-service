import { logger } from '../utils/logger';

const uncaughtExceptionHandler = (err: Error): void => {
  logger.log('error', 'Uncaught Exception', err.message);
  process.exit(1);
};

export { uncaughtExceptionHandler };
