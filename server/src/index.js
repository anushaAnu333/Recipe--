import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import { userRouter } from "./routes/users.js";
import { receipeRouter } from "./routes/receipe.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/receipes", receipeRouter);
mongoose.connect(
  "mongodb+srv://Anusha:04931224467@receipe.l0gtzs9.mongodb.net/receipe?retryWrites=true&w=majority"
);
app.listen(8000, () => console.log("server is running"));
