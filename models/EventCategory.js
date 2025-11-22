const mongoose = require("mongoose");

const EventCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
}, { timestamps: true }); // tạo createdAt và updatedAt tự động

module.exports = mongoose.model("EventCategory", EventCategorySchema);
