import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import chalk from 'chalk';

import createDebug from 'debug';

import morgan from 'morgan';

import { mongoURI } from './server/config/db';
import { cloudinaryConfig } from './server/config/cloudinary';

const app = express();
const port = 7000;

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
import products from './server/routes/api/products';
import users from './server/routes/api/auth';
import uploads from './server/routes/api/uploads';
app.use('/api/products/', products);
app.use('/api/auth/', users);
app.use('/api/uploads/', uploads);

app.listen(port, () => debug(`Server running on port ${chalk.green(port)}`));

export default app;
