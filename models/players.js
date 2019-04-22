const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: String,
  health: Integer,
  ap: Integer,
  strength: Integer,
  toughness: Integer
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
