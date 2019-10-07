import express from "express";

// import mongoose from 'mongoose';

import chalk from "chalk";

import createDebug from "debug";

import morgan from "morgan";

import dotenv from "dotenv";

const app = express();
const port = 5000;
dotenv.config();

const debug = createDebug("app");

// Middlewares
app.use(morgan("tiny"));
// Connect to DB
// const db = require('./config/db');

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log(`MongoDB Connected`))
//   .catch(error => console.error(`Database is not connected... ${error}`));

app.listen(port, () => debug(`Server running on port ${chalk.red(port)}`));
