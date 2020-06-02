import mongoose from 'mongoose';
import { mongoURI } from './config/db';

// Connect to DB
export default async () => {
  const connection = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  return connection.connection.db;
};
