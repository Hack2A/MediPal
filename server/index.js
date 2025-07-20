const express = require("express");
const connectDB = require("./db");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: "https://akshatp17.github.io",
  credentials: true
}));
app.use(bodyParser.json());
connectDB();
app.use("/v1", require("./router/authRouter"));
app.use("/v1", require("./router/doctorRegRouter"));
app.use("/v1", require("./router/loginRouter"));
app.use("/v1", require("./router/chatBotRouter"));
app.use("/v1", require("./router/currentUserRouter"));
app.use("/v1", require("./router/getDocRouter"));
app.use("/v1", require("./router/changeDocRouter"));
app.use("/v1", require("./router/appointmentRouter"));
app.use("/v1", require("./router/getAppointmentRouter"));
app.use("/v1", require("./router/prescRouter"));
app.use("/v1", require("./router/mapRouter"));
app.use("/v1", require("./router/otpRouter"));

app.get("/", (req, res) => {
  res.send("Hello World!2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
