import express from "express";

import mongoose from "mongoose";

import chalk from "chalk";

import createDebug from "debug";

import morgan from "morgan";

import { mongoURI } from "../server/config/db";

const app = express();
const port = 7000;

const debug = createDebug("app");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => debug(`${chalk.green(`MongoDB Connected`)}`))
  .catch(error => debug(`Database is not connected... ${chalk.red(error)}`));

// Use Routes
import products from "./routes/api/products";
app.use("/api/products/", products);

app.listen(port, () => debug(`Server running on port ${chalk.green(port)}`));
