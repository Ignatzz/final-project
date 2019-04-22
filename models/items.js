const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  subtext: String,
  picURL: String,
  health: Integer,
  ap: Integer,
  strength: Integer,
  toughness: Integer,
  companion: Integer
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
