const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  address: String,
  state: String,
  city: String,
  gender: String,
  password: String,
  hobbies: String,
  rate: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Emp", userSchema);
