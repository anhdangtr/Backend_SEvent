const mongoose = require("mongoose");

const InterestingEventSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  }

}, { timestamps: { createdAt: "liked_at", updatedAt: false } });

module.exports = mongoose.model("InterestingEvent", InterestingEventSchema);
