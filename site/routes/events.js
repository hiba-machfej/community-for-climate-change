const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const eventControllers = require("../controllers/events");

router.post("/add-event", isAuth, eventControllers.postAddEvent);
router.get("/get-event", isAuth, eventControllers.getEvent);
router.get("/get-events", eventControllers.getEvents);
module.exports = router;
