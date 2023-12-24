import express from "express";
import mongoose from "mongoose";
import { ReceipeModel } from "./../models/Receipe.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await ReceipeModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});
router.post("/", async (req, res) => {
  const receipe = new ReceipeModel(req.body);
  try {
    const response = await receipe.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});
router.put("/", async (req, res) => {
  try {
    const receipe = await ReceipeModel.findById(req.body.receipeID);
    const user = await UserModel.findById(req.body.userID);
    user.savedReceipe.push(receipe);
    await user.save();
    res.json({ savedReceipe: user.savedReceipe });
  } catch (err) {
    res.json(err);
  }
});
export { router as receipeRouter };
