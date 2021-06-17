import { PORT } from './common/config';
import app from './app';
import { uncaughtExceptionHandler } from './resources/middlewares/exception.handler';
import { unhandledRejectionHandler } from './resources/middlewares/rejection.handler';

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
