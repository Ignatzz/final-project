const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// "/api/items"
router.route("/")
  .get(itemsController.findAll)     // Not Tested
  .post(itemsController.create);    // Not Tested

// "/api/items/:id"
router.route("/:id")
  .get(itemsController.find)        // Not Tested
  .delete(itemsController.remove);  // Not Tested

module.exports = router;
