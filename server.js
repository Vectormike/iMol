// import express from "express";
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to DB
const db = require("./config/db");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`MongoDB Connected`))
  .catch(error => console.error(`Database is not connected... ${error}`));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
