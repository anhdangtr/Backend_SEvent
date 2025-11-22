const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["admin", "user"],    // giống ENUM trong SQL
    required: true,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Role", RoleSchema);
