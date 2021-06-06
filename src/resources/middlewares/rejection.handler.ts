import { logger } from '../utils/logger';

const unhandledRejectionHandler = (err: Error): void => {
  logger('error', `Unhandled Rejection: ${err.message}`);
  setTimeout(() => process.exit(1), 1000);
};

export { unhandledRejectionHandler }