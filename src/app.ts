// const express = require('express');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
// const userRouter = require('./resources/users/user.router');
// const boardRouter = require('./resources/boards/board.router');
// const taskRouter = require('./resources/tasks/task.router');

import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { router as userRouter } from './resources/users/user.router.js';
import { router as boardRouter } from './resources/boards/board.router.js';
import { router as taskRouter } from './resources/tasks/task.router.js';
import commonjsVariables from 'commonjs-variables-for-esmodules';
const { __dirname } = commonjsVariables(import.meta);
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', [boardRouter, taskRouter]);

export default app;
