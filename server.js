/* eslint-disable no-undef */
import app from './server/loaders/express';
import DB from './server/loaders/mongoose';
import LoggerInstance from './server/loaders/logger';
import config from './server/config/vars';

async function startServer() {
  await DB();
  app.listen(process.env.PORT, (err) => {
    if (err) {
      LoggerInstance.error(err);
      process.exit(1);
    }
    LoggerInstance.info(`🛡️ Server listening on port: ${config.port}🛡️ `);
  });
}
startServer();
