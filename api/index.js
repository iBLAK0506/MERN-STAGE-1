import { error } from "console";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_STRING_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
