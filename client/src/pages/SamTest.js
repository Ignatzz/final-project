import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";
import  { Redirect } from 'react-router-dom'
import {FrolfBoy} from "../components/Enemies"

var state = {
  events: [],         // All events
  items: [],          // All items
  playerItems: [],    // All player items
  playerStats: [],
  xp: 0,
  level: 1,     // Player stats at [0]
  enemyHealth: 10,
  enemyAP: 10,
  enemyToughness: 5,
  enemyStrength: 5
};

// Exported functions     - exported functions
// getRandomItem()        - get random item
// getRandomEvent()       - get random event
// getStats()             - get stats
// .state                 - returns all of the above varable
// load()                 - load all of the events items and stats
// regularAttack()
// specialAttack()

function enemyAttacks() {
  console.log("The enemy is attacking!");
  if (state.enemyAP >=7) {
    console.log("The enemy is using there special attack!");


    // Show enemy using special attack!


    var damage = ((2*Math.floor(Math.random()*6)) + (state.enemyStrength/2)) - (state.playerStats[0].toughness/2);
    if (damage >= 0) {
      state.playerStats[0].health = state.playerStats[0].health - damage;
      checkDeath(damage);
    } else {
      alert("The attack missed!");
    }
  } else {
    console.log("The enemy is doing a regular attack!");


    // Show enemy attacking!


    var damage = ((Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
    if (damage >= 0) {
      state.playerStats[0].health = state.playerStats[0].health - damage;
      checkDeath(damage);
    } else {
      alert("The attack missed!");
    }
  }


  // Go back to player attacking


}

function checkDeath(damage) {

  if (state.playerStats[0].health <= 0) {
    alert("You were hit with "+damage+" damage! You have been slain!");


    // Route to game over screen


  } else {
    alert("You were hit with "+damage+" damage! You're health is now at "+state.playerStats[0].health+"!");


    // Close enemy attack modal and return to attack screen


  }
}

// Player attacks to be called from the buttons
export function regularAttack() {
  state.playerStats[0].ap = parseInt(state.playerStats[0].ap)-1;
  var damage = ((Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
  state.enemyHealth = state.enemyHealth - damage;
  if (state.enemyHealth <= 0) {
    state.xp += 200;
    alert("You have killed the enemy and gained 200xp!");
    checkLevelUp();


    // Need to route back to fairmount screen


  } else {
    alert("The enemy was attacked with a damage of "+damage+" and is now at "+state.enemyHealth);
    enemyAttacks();
  }
}
export function specialAttack() {
  if (parseInt(state.playerStats[0].ap) >= 7) {
    state.playerStats[0].ap = parseInt(state.playerStats[0].ap)-7;
    var damage = ((2*Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
    state.enemyHealth = state.enemyHealth - damage;

    if (state.enemyHealth <= 0) {
      state.xp += 200;
      alert("You have killed the enemy and gained 200xp!");
      checkLevelUp();


      // Need to route back to fairmount screen


    } else {
      console.log("The enemy was attacked with a damage of "+damage+" and is now at "+state.enemyHealth);
      enemyAttacks();
    }
  } else {
    alert("You don't have enough AP to use your special attack! ("+state.playerStats[0].ap+"/7)");
    return;
  }
}

function attackEnemy(type) {      // Not used:
  if (type === 'frolfer') {


    // Route to frolfer attack screen


  } else if (type === 'tourist') {


    // Route to tourist attack screen


  }
}

export function useItem(item) {
  alert("You just used "+item.title+"!");
  var health = parseInt(item.health);
  var ap = parseInt(item.ap);
  var strength = parseInt(item.strength);
  var toughness = parseInt(item.toughness);

  state.playerStats[0].health = parseInt(state.playerStats[0].health) + health;
  state.playerStats[0].ap = parseInt(state.playerStats[0].ap) + ap;
  state.playerStats[0].strength = parseInt(state.playerStats[0].strength) + strength;
  state.playerStats[0].toughness = parseInt(state.playerStats[0].toughness) + toughness;

  var message = 'It\'s effects on you are:';

  if (health != 0) {
    message = message + ' HP: ' + health;
  }
  if (ap != 0) {
    message = message + ' AP: ' + ap;
  }
  if (strength != 0) {
    message = message + ' Strength: ' + strength;
  }
  if (toughness != 0) {
    message = message + ' Toughness: '+ toughness;
  }
  alert(message);
  checkDeath();
}

// Location 1 choices
export function takeNap() {
  var randProb = Math.floor(Math.random() * 101)-1;
  if (randProb <= 80) {
    // Regain 2 AP!
    state.playerStats[0].ap = parseInt(state.playerStats[0].ap) + 2;
    alert("You gained two AP! You are now at "+state.playerStats[0].ap);
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
  var randProb = Math.floor(Math.random() * 101)-1;
  if (randProb <= 80) {
    // Regain 2 AP!
    state.playerStats[0].ap = parseInt(state.playerStats[0].ap) + 2;
    alert("You gained two AP! You are now at "+state.playerStats[0].ap);
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
  var randProb = Math.floor(Math.random() * 101)-1;
  console.log("randprob=" + randProb)
  if (randProb <= 60) {
    // Fight frolfer
    console.log("Attacking Frolfer");
    return FrolfBoy;
    // return attackEnemy('frolfer');
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
  console.log(state);
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

function storeItems(res) {
  console.log(res);
  state.items = res;
}
function storeEvents(res) {
  console.log(res);
  state.events = res;
}
function storePlayers(res) {
  console.log(res);
  state.playerStats = res;
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
  alert(state.playerStats[0].name+' has leveled up!');
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
}                                   // Updates player stats()
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
}                                   // Calls levelUp()
