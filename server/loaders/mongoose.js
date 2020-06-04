import mongoose from 'mongoose';
import config from '../config/vars';
import LoggerInstance from './logger';

// Connect to DB
export default async () => {
  try {
    const connection = await mongoose.connect(config.databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    LoggerInstance.info('✌️ DB loaded and connected!');
    return connection.connection.db;
  } catch (error) {
    LoggerInstance.error(`DB not connected: ${error}`);
  }
};
