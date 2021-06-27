import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { router as userRouter } from './resources/users/user.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';
import { router as loginRouter } from './resources/login/login.router';

import { errorHandler } from './resources/middlewares/error.handler';
import { requestResponceHandler } from './resources/middlewares/req-res.handler';

import { CustomError } from './resources/utils/customError';

import { checkToken } from './resources/middlewares/check.token';

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
app.use('/login', loginRouter);
app.use(checkToken);
app.use('/users', userRouter);
app.use('/boards', [boardRouter, taskRouter]);

app.use('*', () => {
  throw new CustomError(404, 'Page not found!');
});

app.use(errorHandler);

export default app;
