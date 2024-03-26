import { Schema, model, models } from "mongoose";

const userSchema = Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model("User", userSchema);
