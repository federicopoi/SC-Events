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
  const {
    eventName,
    description,
    location,
    date,
    time,
    organizer,
    details,
    imageUrl,
  } = req.body;

  // Simple validation
  if (
    !eventName ||
    !description ||
    !location ||
    !date ||
    !time ||
    !organizer ||
    !details ||
    !imageUrl
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
    imageUrl,
  });

  newEvent.save().then((event) => res.json(event));
});

// @route POST api/events/addPerson
// @desc Add Person
// @access Public
router.post("/addPerson", (req, res) => {
  const { _id, person } = req.body;

  Event.findById({ _id }).exec((err, event) => {
    if (err) console.log("Add person ", err);

    const arr = event.people;

    const concatArr = arr.concat(person);
    event.people = concatArr;

    event.save().then((event) => res.json(event));
  });
});

// @route POST api/events/deletePerson
// @desc Delete Person
// @access Public
router.post("/deletePerson", (req, res) => {
  const { _id, person } = req.body;

  Event.findById({ _id }).exec((err, event) => {
    if (err) console.log("Delete Person ", err);

    const currentStudentId = person.studentId;

    const arr = event.people;

    const index = arr.findIndex(
      (person) => person.studentId === currentStudentId
    );
    if (index > -1) {
      arr.splice(index, 1);
    }
    event.people = arr;

    event.save().then((event) => res.json(event));
  });
});
module.exports = router;

module.exports = router;
