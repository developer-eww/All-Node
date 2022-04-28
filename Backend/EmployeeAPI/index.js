const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const list = require("./router/list");
const add = require("./router/Add_post");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connection
const db = mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db connected");
  }
);

app.use(express.json());
app.use(cors());

app.use("/employee", list);
app.use("/employee", add);

app.listen(3000, () => {
  console.log(`server is running ${PORT}`);
});
