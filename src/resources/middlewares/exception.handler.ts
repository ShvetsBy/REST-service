import { logger } from '../utils/logger.js';

const uncaughtExceptionHandler = (err: Error): void => {
  logger.log('error', `Uncaught Exception ${err.message}`);
  setTimeout(() => process.exit(1), 1000);
};

export { uncaughtExceptionHandler }