import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import chalk from 'chalk';

import createDebug from 'debug';

import morgan from 'morgan';

import { mongoURI } from './config/db';
import { cloudinaryConfig } from './config/cloudinary';

const app = express();

app.use(cors());
const debug = createDebug('app');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', cloudinaryConfig);

// Connect to DB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => debug(`${chalk.green(`MongoDB Connected`)}`))
  .catch(error => debug(`Database is not connected... ${chalk.red(error)}`));

// Use Routes
import products from './routes/api/products';
import users from './routes/api/auth';
import uploads from './routes/api/uploads';
app.use('/api/products/', products);
app.use('/api/auth/', users);
app.use('/api/uploads/', uploads);

export default app;
