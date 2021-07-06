import { PORT } from './common/config';
import app from './app';
import { uncaughtExceptionHandler } from './resources/middlewares/exception.handler';
import { unhandledRejectionHandler } from './resources/middlewares/rejection.handler';
import { TryToConnect } from './resources/utils/db';
import { createAdmin } from './resources/utils/createDefaultAdmin';

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

TryToConnect(() => {
  app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
  createAdmin();
});
