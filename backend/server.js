require("dotenv").config();
const express = require("express");
const cors = requiere("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) return;
    console.log("connected to DB");
    console.log(err);
  }
);

const PORT = process.env.PORT || 3600;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser);
app.use(cors());

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});
