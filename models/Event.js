const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
    trim: true
  },

  content: {
    type: String,
    required: true
  },

  banner_url: {
    type: String,
    required: true
  },

  registration_form_url: {
    type: String,
    required: false
  },

  form_submission_deadline: {
    type: Date,
    required: false
  },

  publish_date: {
    type: Date,
    required: false
  },

  start_date: {
    type: Date,
    required: true
  },

  end_date: {
    type: Date,
    required: true
  },

  location: {
    type: String,
    required: true,
    trim: true
  },

  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventCategory",
    required: true
  },

  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // admin tạo
    required: true
  }

}, { timestamps: true }); // tự tạo createdAt và updatedAt


module.exports = mongoose.model("Event", EventSchema);
