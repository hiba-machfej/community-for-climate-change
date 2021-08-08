const express = require("express");
const router = express.Router();

const eventController = require("../controllers/event");

router.post("/add-event", eventController.postAddEvent);

router.get("/get-my-events", eventController.getMyEvents);

router.get("/get-all-events", eventController.getAllEvents);

router.delete("/delete-event");

module.exports = router;
