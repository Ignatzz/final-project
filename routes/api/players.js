const router = require("express").Router();
const playersController = require("../../controllers/playersController");

// "/api/players"
router.route("/")
  .get(playersController.findAll)     // Not Tested
  .post(playersController.create);    // Not Tested

// "/api/players"
router.route("/:id")
  .get(playersController.find)        // Not Tested
  .delete(playersController.remove);  // Not Tested

module.exports = router;
