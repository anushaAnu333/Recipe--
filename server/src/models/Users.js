import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedReceipe: { type: mongoose.Schema.Types.ObjectId, ref: "receipes" },
});

export const UserModel = mongoose.model("users", userSchema);
