import { logger } from '../utils/logger.js';

const unhandledRejectionHandler = (err: Error): void => {
  logger.log('error', 'Unhandled Rejection:', err.message);
  setTimeout(() => process.exit(1), 1000);
};

export { unhandledRejectionHandler }