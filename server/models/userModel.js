const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "User",
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
    ephone: {
      type: String,
      require: [true, "Emorgency number is required"],
    },
    smoking: {
      type: Boolean,
      required: true,
    },
    ifsmoking: {
      type: String,
      enum: ["Occasionally", "Regularly", "Heavily"],
      required: function () {
        return this.smoking;
      },
    },
    drinking: {
      type: Boolean,
      required: true,
    },
    ifdrinking: {
      type: String,
      enum: ["Occasionally", "Regularly", "Heavily"],
      required: function () {
        return this.drinking;
      },
    },
    blood: {
      type: String,
      require: [true, "Blood Group is required"],
      enum: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
    },

    allergy: {
      type: [String],
      default: [],
    },
    chronic: {
      type: [String],
      default: [],
    },
    currentmed: {
      type: [String],
      default: [],
    },
    pastsur: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
