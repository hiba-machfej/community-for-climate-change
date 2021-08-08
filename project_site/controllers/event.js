const Event = require("../models/event");

exports.postAddEvent = (req, res, next) => {
    const { title, description, date } = req.body;


    req.user
        .createEvent({ title, date, description })
        .then((results) => res.send("Event is created succesfully"))
        .catch((err) => console.log(err));
};


exports.getMyEvents = (req, res, next) => {

    req.user
        .getEvents()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));

}

exports.getAllEvents = async(req, res, next) => {
    const events = await Event.findAll();
    res.send(events);
}

exports.deleteEvent = (req, res, next) => {

    console.log(req.body.id);
    Event.destroy({
        where: { id: req.body.id },
    });
    res.send('Event deleted');
}