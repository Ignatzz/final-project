const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  subtext: String,
  picURL: String,
  health: String,
  ap: String,
  strength: String,
  toughness: String,
  companion: String
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
