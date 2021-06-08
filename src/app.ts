import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { router as userRouter } from './resources/users/user.router.js';
import { router as boardRouter } from './resources/boards/board.router.js';
import { router as taskRouter } from './resources/tasks/task.router.js';
import commonjsVariables from 'commonjs-variables-for-esmodules';
const { __dirname } = commonjsVariables(import.meta);

import { errorHandler } from './resources/middlewares/error.handler.js';
import { requestResponceHandler } from './resources/middlewares/req-res.handler.js';
import { uncaughtExceptionHandler } from './resources/middlewares/exception.handler.js';
import { unhandledRejectionHandler } from './resources/middlewares/rejection.handler.js';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(requestResponceHandler); 

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});



app.use('/users', userRouter);
app.use('/boards', [boardRouter, taskRouter]);

app.use(errorHandler); 

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

// eslint-disable-next-line
// app.use('/error', (_req: Request, _res: Response) => {
//   throw new Error('Error test');
//  });

export default app;
