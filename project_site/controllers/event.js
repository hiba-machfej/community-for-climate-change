const User = require("../models/user");


exports.postAddEvent = (req, res, next) => {
    const { title, description, date } = req.body;

    User.findOne({ where: { id: req.userId } })
        .then((user) => {

            user.createEvent({ title, description, date });
        })
        .then((results) => res.send("Event is created succesfully"))
        .catch((err) => console.log(err));
};