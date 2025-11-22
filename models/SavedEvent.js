const mongoose = require("mongoose");

const SavedEventSchema = new mongoose.Schema({
  folder_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SavedFolder",
    required: true
  },

  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  }

}, { timestamps: { createdAt: "saved_at", updatedAt: false } });


module.exports = mongoose.model("SavedEvent", SavedEventSchema);
