const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: String,
  health: String,
  ap: String,
  strength: String,
  toughness: String
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
