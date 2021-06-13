import { PORT } from './common/config.js';
import app from './app.js';
import { uncaughtExceptionHandler } from './resources/middlewares/exception.handler.js';
import { unhandledRejectionHandler } from './resources/middlewares/rejection.handler.js';

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
