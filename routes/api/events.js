const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
// Event Model
const Event = require("../../models/Event");

// @route GET api/events/
// @desc Get all Events
// @access Public
router.get("/", (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route POST api/events/
// @desc Create an Event
// @access Public
router.post("/", (req, res) => {
  const { eventName, description, location, date, time, organizer, details } =
    req.body;

  // Simple validation
  if (
    !eventName ||
    !description ||
    !location ||
    !date ||
    !time ||
    !organizer ||
    !details
  ) {
    return res.status(400).json({ msg: "Fill out all fields" });
  }

  const newEvent = new Event({
    eventName,
    description,
    location,
    date,
    time,
    organizer,
    details,
  });

  newEvent.save().then((event) => res.json(event));
});

module.exports = router;
