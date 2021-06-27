import dotenv from 'dotenv';
import path from 'path';
// import commonjsVariables from 'commonjs-variables-for-esmodules';

// const { __dirname } = commonjsVariables(import.meta);

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const {
  PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE, LOG_OUTPUT, ERROR_OUTPUT,
} = process.env;
