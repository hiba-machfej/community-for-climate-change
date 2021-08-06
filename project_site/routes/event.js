const express = require("express");
const isAuth = require("../middleware/is-auth");
const router = express.Router();
const eventController = require("../controllers/event");

router.post("/add-event", isAuth, eventController.postAddEvent);

module.exports = router;