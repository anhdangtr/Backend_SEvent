const router = require("express").Router();
const eventController = require("../controllers/eventController");
const auth = require("../middleware/authMiddleware");

router.get("/", eventController.getAllEvents);
router.post("/", auth, eventController.createEvent);
router.get("/:id", eventController.getEventById);
router.put("/:id", auth, eventController.updateEvent);
router.delete("/:id", auth, eventController.deleteEvent);

module.exports = router;
