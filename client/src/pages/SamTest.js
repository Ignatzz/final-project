import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";

var state = {
  events: [],         // All events
  items: [],          // All items
  playerItems: [],    // All player items
  playerStats: [],
  xp: 0,
  level: 1,     // Player stats at [0]
  enemyHealth: 10,
  enemyAP: 10,
  enemyToughness: 10
};

// Exported functions     - exported functions
// getRandomItem()        - get random item
// getRandomEvent()       - get random event
// getStats()             - get stats
// .state                 - returns all of the above varable
// load()                 - load all of the events items and stats
// regularAttack()
// specialAttack()

// Functions needed:
// -Attack enemy (regular)
// -Attack enemy (special)
// -Enemy attacks (reg/special)
// -Change location

function enemyAttacks() {
  console.log("The enemy is attacking!");
  if (state.enemyAP >=7) {
    console.log("The enemy is using there special attack!");
  } else {
    console.log("The enemy is doing a regular attack!");
  }
}

// Player attacks to be called from the buttons
export function regularAttack() {
  state.playerStats[0].ap--;
  var damage = ((Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
  state.enemyHealth = state.enemyHealth - damage;
  console.log("The enemy was attacked with a damage of "+damage+" and is now at "+state.enemyHealth);
  enemyAttacks();
}
export function specialAttack() {
  if (state.playerStats[0].ap >= 7) {
    state.playerStats[0].ap = state.playerStats[0].ap-7;
    var damage = ((2*Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
    state.enemyHealth = state.enemyHealth - damage;
    console.log("The enemy was attacked with a damage of "+damage+" and is now at "+state.enemyHealth);
    enemyAttacks();
  } else {
    return;
  }
}

function attackEnemy(type) {      // Not used:
  if (type === 'frolfer') {

  } else if (type === 'tourist') {

  }
}

// Location 1 choices
export function takeNap() {
  var randProb = Math.Rand*100;
  if (randProb <= 80) {
    // Regain 2 AP!
    console.log("Player gained two AP!");
    state.playerStats.ap +=2;
    return "ap";
  } else if (randProb <= 90) {
    // Random Event
    console.log('Found an event!');
    var randomEvent = getRandomEvent();
    console.log(randomEvent);
    return randomEvent;
  } else {
    // Find Item
    console.log('Found an item!');
    var randomItem = getRandomItem();
    console.log(randomItem);
    return randomItem;
  }
}
export function bikeRide() {
  var randProb = Math.Rand*100;
  if (randProb <= 80) {
    // Regain 2 AP!
    console.log("Player gained two AP!");
    state.playerStats.ap +=2;
    return "ap";
  } else if (randProb <= 90) {
    // Random Event
    console.log('Found an event!');
    var randomEvent = getRandomEvent();
    console.log(randomEvent);
    return randomEvent;
  } else {
    // Find Item
    console.log('Found an item!');
    var randomItem = getRandomItem();
    console.log(randomItem);
    return randomItem;
  }
}
export function playFrisbee() {
  var randProb = Math.Rand*100;
  if (randProb <= 60) {
    // Fight frolfer
    console.log("Attacking Frolfer");
    return attackEnemy('frolfer');
  } else if (randProb <= 80) {
    // Fight tourist
    console.log("Attacking Tourist");
    return attackEnemy('tourist');
  } else {
    // Find item
    console.log('Found an item!');
    var randomItem = getRandomItem();
    console.log(randomItem);
    return randomItem;
  }
}

export function getRandomItem() {
  var rand = Math.floor(Math.random() * state.items.length);
  console.log('Got random item:');
  console.log(state.items[rand]);
  state.playerItems.push(state.items[rand]);
  return state.items[rand];
}
export function getRandomEvent() {
  var rand = Math.floor(Math.random() * state.events.length);
  console.log('Got random event:');
  console.log(state.events[rand]);
  // Need function to change stats
  return state.events[rand];
}
export function getPlayer() {
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

function nextLocation() {
  if (state.level == 2) {
    alert('Level 1 complete! Restoring health and AP!');
    // Needs routing

  } else if (state.level == 3) {
    alert('Level 2 complete! Restoring health and AP!');

  } else if (state.level == 4) {
    alert('Level 3 complete! Restoring health and AP!');

  } else {
    alert('Level 4 complete! Restoring health and AP!');

  }
}

function levelUp() {
  console.log('Player '+state.playerStats.name+' leveled up.');
  console.log('Previously:');
  console.log(state.playerStats);
  state.playerStats[0].health     =   10 + 2*state.level;
  state.playerStats[0].ap         =   10 + 2*state.level;
  state.playerStats[0].strength   =   state.playerStats[0].strength + 1;
  state.playerStats[0].toughness  =   state.playerStats[0].toughness + 1;
  state.level++;
  console.log('Now:');
  console.log(state.playerStats);
  nextLocation();
  return state.playerStats[0];
}          // Updates player stats()
function checkLevelUp() {
  if ( state.xp >= 6500 ) {
    if (state.level < 5)
      levelUp();
  } else if ( state.xp >= 2700 ) {
    if (state.level < 4)
      levelUp();
  } else if ( state.xp >= 900 ) {
    if (state.level < 3)
      levelUp();
  } else if ( state.xp >= 300 ) {
    if (state.level < 2)
      levelUp();
  }
}     // Calls levelUp()
