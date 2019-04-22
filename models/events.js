const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  subtext: String,
  picURL: String,
  health: Integer,
  ap: Integer,
  strength: Integer,
  toughness: Integer,
  companion: Integer
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
