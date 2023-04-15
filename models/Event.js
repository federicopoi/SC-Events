const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const EventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  {
    collection: "events",
  }
);

module.exports = Event = mongoose.model("event", EventSchema);
