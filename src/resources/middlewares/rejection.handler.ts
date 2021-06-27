import { logger } from '../utils/logger';

const unhandledRejectionHandler = (err: Error): void => {
  logger.log('error', 'Unhandled Rejection:', err.message);
  process.exit(1);
};

export { unhandledRejectionHandler };
