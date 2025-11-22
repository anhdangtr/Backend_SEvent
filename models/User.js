const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",   // tham chiếu tới bảng roles
    required: true
  }

}, { timestamps: true }); // tự tạo createdAt và updatedAt

module.exports = mongoose.model("User", UserSchema);
