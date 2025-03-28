const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "Doctor",
    },
    verify: {
      type: String,
      default: "Under Review",
      enum: ["Under Review", "Verified"],
    },
    name: {
      type: String,
      require: [true, "Name is required"],
    },

    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    age: {
      type: Number,
      require: [true, "Age is required"],
    },
    gender: {
      type: String,
      require: [true, "Gender is required"],
      enum: ["M", "F"],
    },
    phone: {
      type: String,
      require: [true, "Phone number is required"],
    },

    mlno: {
      type: String,
      require: [true, "Medical Lisence number is required"],
    },
    libody: {
      type: String,
      require: [true, "Lisence Issuing Body is required"],
    },
    specilization: {
      type: String,
      require: [true, "Specilization is required"],
    },
    yoe: {
      type: Number,
      require: [true, "Year of Experience is required"],
    },
    degree: {
      type: String,
      require: [true, "Degree is required"],
    },
    clinicname: {
      type: String,
      require: [true, "Clinic Name is required"],
    },
    clinicloc: {
      type: String,
      require: [true, "Clinic Location is required"],
    },
    availability: [{ type: String, required: true }],

    fee: {
      type: Number,
      require: [true, "Consultency Fees is required"],
    },
    language: {
      type: [String],
      default: [],
      require: [true, "Language is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("doctors", doctorSchema);
