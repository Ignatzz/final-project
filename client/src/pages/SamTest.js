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

  if (state.enemyAP >=7) {
    alert("The enemy is using there special attack!");


    // Show enemy using special attack!


    var damage = ((2*Math.floor(Math.random()*6)) + (state.enemyStrength/2)) - (state.playerStats[0].toughness/2);
    if (damage >= 0) {
      state.playerStats[0].health = state.playerStats[0].health - damage;
      checkDeath(damage);
    } else {
      alert("The attack missed!");
    }
  } else {
    alert("The enemy is using a regular attack!");


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
    fightsOver();

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
      fightsOver();

    } else {

      alert("The enemy was attacked with a damage of "+damage+" and is now at "+state.enemyHealth);
      enemyAttacks();

    }
  } else {

    alert("You don't have enough AP to use your special attack! ("+state.playerStats[0].ap+"/7)");
    return;

  }
}

function fightsOver() {

  var btnA = document.getElementsByClassName('buttonA');
  var btnB = document.getElementsByClassName('buttonB');
  var btnC = document.getElementsByClassName('buttonC');
  btnA[0].style.display = "inline-block";
  btnB[0].style.display = "inline-block";
  btnC[0].style.display = "inline-block";

  var atkBtn = document.getElementsByClassName('regAttackButton');
  var spcBtn = document.getElementsByClassName('specAttackButton');
  var itmBtn = document.getElementsByClassName('useItemButton');
  atkBtn[0].style.display = "none";
  spcBtn[0].style.display = "none";
  itmBtn[0].style.display = "none";

  var tourist = document.getElementsByClassName('touristDiv');
  var hpBar = document.getElementsByClassName('healthBarDiv');
  var apBar = document.getElementsByClassName('APBarDiv');
  tourist[0].style.display = "none";
  hpBar[0].style.display = "none";
  apBar[0].style.display = "none";

  var tourist = document.getElementsByClassName('touristDiv');
  var hpBar = document.getElementsByClassName('healthBarDiv');
  var apBar = document.getElementsByClassName('APBarDiv');
  tourist[0].style.display = "none";
  hpBar[0].style.display = "none";
  apBar[0].style.display = "none";

}

function attackEnemy(type) {      // Not used:

  var btnA = document.getElementsByClassName('buttonA');
  var btnB = document.getElementsByClassName('buttonB');
  var btnC = document.getElementsByClassName('buttonC');
  btnA[0].style.display = "none";
  btnB[0].style.display = "none";
  btnC[0].style.display = "none";

  var atkBtn = document.getElementsByClassName('regAttackButton');
  var spcBtn = document.getElementsByClassName('specAttackButton');
  var itmBtn = document.getElementsByClassName('useItemButton');
  console.log(atkBtn);
  console.log(spcBtn);
  console.log(itmBtn);
  atkBtn[0].style.display = "inline-block";
  spcBtn[0].style.display = "inline-block";
  itmBtn[0].style.display = "inline-block";

  if (type === 'frolfer') {

    var frolfer = document.getElementsByClassName('frolfDiv');
    var hpBar = document.getElementsByClassName('healthBarDiv');
    var apBar = document.getElementsByClassName('APBarDiv');
    frolfer[0].style.display = "inline-block";
    hpBar[0].style.display = "inline-block";
    apBar[0].style.display = "inline-block";

  } else if (type === 'tourist') {

    var tourist = document.getElementsByClassName('touristDiv');
    var hpBar = document.getElementsByClassName('healthBarDiv');
    var apBar = document.getElementsByClassName('APBarDiv');
    tourist[0].style.display = "inline-block";
    hpBar[0].style.display = "inline-block";
    apBar[0].style.display = "inline-block";

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

    state.playerStats[0].ap = parseInt(state.playerStats[0].ap) + 2;
    alert("You rested well and gained 2 AP! You are now at "+state.playerStats[0].ap+"!");
    return "ap";

  } else if (randProb <= 90) {

    var randomEvent = getRandomEvent();
    return randomEvent;

  } else {

    var randomItem = getRandomItem();
    return randomItem;

  }
}
export function bikeRide() {

  // window.history.push("/");

  var randProb = Math.floor(Math.random() * 101)-1;
  if (randProb <= 80) {

    state.playerStats[0].ap = parseInt(state.playerStats[0].ap) + 2;
    alert("The bike trip energized you with 2 AP! You are now at "+state.playerStats[0].ap+"!");
    return "ap";

  } else if (randProb <= 90) {

    var randomEvent = getRandomEvent();
    return randomEvent;

  } else {

    var randomItem = getRandomItem();
    return randomItem;

  }
}
export function playFrisbee() {

  // window.location.href = '/';

  var randProb = Math.floor(Math.random() * 101)-1;
  console.log("randprob=" + randProb);
  if (randProb <= 60) {

    console.log("Attacking Frolfer");
    // return FrolfBoy;
    return attackEnemy('frolfer');

  } else if (randProb <= 80) {

    console.log("Attacking Tourist");
    return attackEnemy('tourist');

  } else {

    // Find item
    var randomItem = getRandomItem();
    state.playerItems.add(randomItem);
    return randomItem;

  }
}

export function getRandomItem() {

  var rand = Math.floor(Math.random() * state.items.length);
  alert('You just picked up an'+state.items[rand].title);
  state.playerItems.push(state.items[rand]);
  console.log(state);
  return state.items[rand];

}
export function getRandomEvent() {
  var rand = Math.floor(Math.random() * state.events.length);
  alert('Got random event: '+state.events[rand].title);
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
