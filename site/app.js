const express = require("express");
const app = express();
const port = 3002;
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const path = require("path");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");
const eventRouter = require("./routes/event");

// Database
const db = require("./util/database");
const passport = require("passport");

const User = require("./models/user");
const Event = require("./models/event");

const initPassport = require("./util/passport-config");
initPassport(passport);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(
  session({
    secret: "MySecret",
    store: new SequelizeStore({
      db: db,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findOne({ where: { id: req.session.user.id } })
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(eventRouter);
app.use(userRouter);

Event.belongsTo(User);
User.hasMany(Event);

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
