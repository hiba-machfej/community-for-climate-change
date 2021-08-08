const express = require("express");

const router = express.Router();

const eventController = require("../controllers/event");

router.post("/add-event", eventController.postAddEvent);
router.get("/get-user", eventController.getEvent);
module.exports = router;
