const User = require("../models/user");

const Event = require("../models/event");

exports.postAddEvent = (req, res, next) => {
    const { title, description, date } = req.body;


    req.user
        .createEvent({ title, date, description })
        .then((results) => res.send("Event is created succesfully"))
        .catch((err) => console.log(err));
};


exports.getEvent = (req, res, next) => {

    req.user
        .getEvents()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));

}