const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    register_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

module.exports = User = mongoose.model("user", UserSchema);
