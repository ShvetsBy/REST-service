import { getConnection, createConnection } from 'typeorm';
import { logger } from './logger';
import config from '../../common/configOrm';

const connectToDB = async () => {
  let connection;
  try {
    connection = getConnection();
  } catch (e) {
    logger.log('info', e);
  }
  try {
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      await createConnection(
      //   {
      //   type: 'postgres',
      //   host: 'localhost',
      //   port: 5432,
      //   username: 'postgres',
      //   password: 'postgres',
      //   database: 'postgres',
      //   synchronize: true,
      // }
        config,
      );
    }
    console.log('connection ok');
  } catch (e) {
    logger.log('info', e);
  }
};

const TryToConnect = async (cb: () => void) => {
  try {
    await connectToDB();
    cb();
  } catch (e) {
    logger.log('info', e);
  }
};

export { TryToConnect };
