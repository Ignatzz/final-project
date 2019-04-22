const router = require("express").Router();
const playerRoutes = require("./players");
const eventRoutes = require("./events");
const itemRoutes = require("./items");

router.use("/players", playerRoutes); // Not yet implemented
router.use("/events", eventRoutes);   // Not yet implemented
router.use("/items", itemRoutes);     // Not yet implemented

module.exports = router;
