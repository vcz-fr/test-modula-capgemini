const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  password: String,
  role: {
    type: String,
    default: "admin"
  }
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;