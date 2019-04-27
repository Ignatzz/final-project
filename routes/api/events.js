const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create)
  .delete(eventsController.removeALL);

// "/api/events/:id"
router.route("/:id")
  .get(eventsController.find)
  .delete(eventsController.remove);

module.exports = router;
