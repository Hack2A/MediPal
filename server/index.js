const express = require("express");
const connectDB = require("./db");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
