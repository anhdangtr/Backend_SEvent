const mongoose = require("mongoose");

const SavedFolderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  }

}, { timestamps: true }); // tự tạo createdAt và updatedAt

module.exports = mongoose.model("SavedFolder", SavedFolderSchema);
