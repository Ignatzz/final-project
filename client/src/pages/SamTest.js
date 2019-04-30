import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";

var state = {
  events: [],         // All events
  items: [],          // All items
  playerItems: [],   // All player items
  playerStats: []    // Player stats at [0]
};

// Exported functions
// getRandomItem()
// getRandomEvent()
// getPlayer()


export function getRandomItem() {
  var rand = Math.floor(Math.random() * state.items.length);
  console.log(state.items[rand]);
  //playerItems.add()
}

export function getRandomEvent() {
  var rand = Math.floor(Math.random() * state.events.length);
  console.log(state.events[rand]);
}

function getPlayer() {
  console.log(state.playerStats[0]);
  return state.playerStats[0];
}

// Loading functions:
export { state };
export function load() {
  getEverything();
  setTimeout(
    function() {
      getRandomEvent();
    }
    .bind(this),
    5000
  );
}
function getEverything() {
  setTimeout(
    function() {
      getItems();
    }
    .bind(this),
    100
  );
  setTimeout(
    function() {
      getEvents();
    }
    .bind(this),
    200
  );
  setTimeout(
    function() {
      getPlayers();
    }
    .bind(this),
    300
  );
}
function storeItems(res) {
  state.items = res;
}
function storeEvents(res) {
  state.events = res;
}
function storePlayers(res) {
  state.players = res;
}
function getItems() {
  API.getItems()
    .then(res =>
      storeItems(res.data)
    )
    .catch(err => console.log(err));
}
function getEvents() {
  API.getEvents()
    .then(res =>
      storeEvents(res.data)
    )
    .catch(err => console.log(err));
}
function getPlayers() {
  API.getPlayers()
    .then(res =>
      storePlayers(res.data)
    )
    .catch(err => console.log(err));
}

// Functions needed:
// -Player Stats Update
// -Player level up
// -Attack enemy (regular)
// -Attack enemy (special)
// -Enemy attacks (reg/special)
// -Change location
// -Get random event
// -Get random item
// -Randomizer for each action at each location (x12)
// -Use item, get and update stats
