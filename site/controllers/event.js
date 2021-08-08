exports.postAddEvent = (req, res, next) => {
  console.log(req.body);
  console.log(req.user);
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  req.user
    .createEvent({ title, description, date })
    .then((results) => res.send("Event is created succesfully"))
    .catch((err) => console.log(err));
};

exports.getEvent = (req, res, next) => {
  req.user
    .getEvents()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
