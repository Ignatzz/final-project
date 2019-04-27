import axios from "axios";

export default {
  // Players
  getPlayers: function() {
    return axios("/api/players");
  },
  savePlayer: function(playerData) {
    return axios.post("/api/players", playerData);
  },
  getPlayer: function(id) {
    return axios("/api/players/"+id);
  },
  deletePlayer: function(id) {
    return axios.delete("/api/players/"+id);
  },
  deletePlayers: function() {
    return axios.delete("/api/players")
  },
  // Events
  getEvents: function() {
    return axios("/api/events");
  },
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  getEvent: function(id) {
    return axios("/api/events/"+id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/"+id);
  },
  deleteEvents: function() {
    return axios.delete("/api/events")
  },
  // Items
  getItems: function() {
    return axios("/api/items");
  },
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  },
  getItem: function(id) {
    return axios("/api/items/"+id);
  },
  deleteItem: function(id) {
    return axios.delete("/api/items/"+id);
  },
  deleteItems: function() {
    return axios.delete("/api/items")
  }
}
