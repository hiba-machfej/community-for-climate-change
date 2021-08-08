const User = require("../models/user");
const Event = require("../models/event");
exports.postAddEvent = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  User.findOne({ where: { id: req.userId } })
    .then((user) => {
      console.log("hey");
      user.createEvent({ title, description, date });
    })
    .then((results) => res.send("Event is created succesfully"))
    .catch((err) => console.log(err));
};
exports.getEvent = (req, res, next) => {
  User.findOne({ where: { id: req.userId } })
    .then((user) => user.getEvents())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
exports.getEvents = async (req, res, next) => {
  const events = await Event.findAll();
  console.log(req.events);
  res.send(events).catch((err) => console.log(err));
};
