import { logger } from '../utils/logger';

const uncaughtExceptionHandler = (err: Error): void => {
  logger('error', 'Uncaught Exception', err.message);
  setTimeout(() => process.exit(1), 1000);
};

export { uncaughtExceptionHandler }