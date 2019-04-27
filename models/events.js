const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id: String,
  title: String,
  subtext: String,
  picURL: String,
  health: String,
  ap: String,
  strength: String,
  toughness: String,
  specialCode: String
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
