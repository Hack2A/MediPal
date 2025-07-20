const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // fallback just in case

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors({
  origin: "https://akshatp17.github.io", // ✔️ GitHub Pages correct origin
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());

// ✅ Routes
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

// ✅ Health Check / Root Route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
