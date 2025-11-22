const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },

  reminder_time: {
    type: Date,
    required: true
  },

  is_send: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: "created_at", updatedAt: false } });

module.exports = mongoose.model("Reminder", ReminderSchema);
