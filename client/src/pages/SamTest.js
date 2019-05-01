import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";
import  { Redirect } from 'react-router-dom'
import {FrolfBoy} from "../components/Enemies"
import {PlayerHealthBar} from "../components/CombatButtons"

var state = {
  events: [],         // All events
  items: [],          // All items
  playerItems: [],    // All player items
  playerStats: [],
  xp: 0,
  level: 1,     // Player stats at [0]
  enemyHealth: 20,
  enemyAP: 10,
  enemyToughness: 5,
  enemyStrength: 5,
  playerHealth: 10,
  playerAP: 10
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

    state.enemyAP = state.enemyAP - 6;

    // Show enemy using special attack!

    var damage = ((2*Math.floor(Math.random()*6)) + (state.enemyStrength/2)) - (state.playerStats[0].toughness/2);
    if (damage >= 0) {
      state.playerHealth = state.playerHealth - damage;
      checkDeath(damage);
    } else {
      alert("The attack missed!");
    }
  } else {
    alert("The enemy is using a regular attack!");

    // Show enemy attacking!

    var damage = ((Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
    if (damage >= 0) {
      state.playerHealth = state.playerHealth - damage;
      console.log("player health is now "+state.playerHealth);
      checkDeath(damage);
    } else {
      alert("The attack missed!");
    }
  }


  // Go back to player attacking


}

function checkDeath(damage) {

  if (state.playerHealth <= 0) {
    alert("You were hit with "+damage+" damage! You have been slain!");

    // Route to game over screen
    window.location.href = '/gameover';

  } else {
    alert("You were hit with *"+damage+"* damage! You're health is now at "+state.playerHealth+"HP!");
   

    // Close enemy attack modal and return to attack screen


  }
}

// Player attacks to be called from the buttons
export function regularAttack() {

  state.playerAP = parseInt(state.playerAP);
  var damage = ((Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
  state.enemyHealth = state.enemyHealth - damage;

  alert("You punch your foe with *"+damage+"* damage!");

  if (state.enemyHealth <= 0) {

    state.xp += 200;
    alert("You have killed the enemy and gained 200xp!");
    checkLevelUp();
    fightsOver();

  } else {

    alert("Your foe is now at "+state.enemyHealth+"HP!");
    enemyAttacks();

  }
}
export function specialAttack() {

  if (parseInt(state.playerAP) >= 5) {

    state.playerAP = parseInt(state.playerAP)-6;
    var damage = ((2*Math.floor(Math.random()*6)) + (state.playerStats[0].strength/2)) - (state.enemyToughness/2);
    state.enemyHealth = state.enemyHealth - damage;

    alert("You flail your arms like wild and do *"+damage+"* damage on the enemy!");

    if (state.enemyHealth <= 0) {

      state.xp += 200;
      alert("You have killed the enemy and gained 200xp!");
      checkLevelUp();
      fightsOver();

    } else {

      alert("Your foe is now at "+state.enemyHealth+"HP!");
      enemyAttacks();

    }
  } else {

    alert("You don't have enough AP to use your special attack! ("+state.playerAP+"/5)");
    return;

  }
}

function fightsOver() {

  var enemyHealth = 10;
  var enemyAP = 10;

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

  var hpBar = document.getElementsByClassName('healthBarDiv');
  var apBar = document.getElementsByClassName('APBarDiv');
  hpBar[0].style.display = "none";
  apBar[0].style.display = "none";

  var frolfer = document.getElementsByClassName('frolfBoy');
  var tourist = document.getElementsByClassName('tourist');
  frolfer[0].style.display = "none";
  tourist[0].style.display = "none";

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
  atkBtn[0].style.display = "inline-block";
  spcBtn[0].style.display = "inline-block";
  itmBtn[0].style.display = "inline-block";

  var hpBar = document.getElementsByClassName('healthBarDiv');
  var apBar = document.getElementsByClassName('APBarDiv');
  hpBar[0].style.display = "inline-block";
  apBar[0].style.display = "inline-block";

  if (type === 'frolfer') {

    var frolfer = document.getElementsByClassName('frolfBoy');
    console.log(frolfer)
    frolfer[0].style.display = "inline-block";

  } else if (type === 'tourist') {

    var tourist = document.getElementsByClassName('tourist');
    tourist[0].style.display = "inline-block";

  }
}

export function openMenu() {
  var itemMenu = document.getElementsByClassName('frolfBoy');
  var itemTable = document.getElementsByClassName('tourist');
  itemMenu[0].style.display = "inline-block";
  itemTable[0].style.display = "inline-block";
}

export function closeMenu() {
  var itemMenu = document.getElementsByClassName('frolfBoy');
  var itemTable = document.getElementsByClassName('tourist');
  itemMenu[0].style.display = "none";
  itemTable[0].style.display = "none";
}

export function useItem(item) {

  alert("You just used "+item.title+"!");
  var health = parseInt(item.health);
  var ap = parseInt(item.ap);
  var strength = parseInt(item.strength);
  var toughness = parseInt(item.toughness);

  state.playerStats[0].health = parseInt(state.playerStats[0].health) + health;
  state.playerAP = parseInt(state.playerAP) + ap;
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
  if (randProb <= 50) {

    state.playerAP = parseInt(state.playerAP) + 2;
    alert("You rested well and gained 2 AP! You are now at "+state.playerAP+"!");
    return "ap";

  } else if (randProb <= 60) {

    var randomEvent = getRandomEvent();
    return randomEvent;

  } else {

    var randomItem = getRandomItem();
    return randomItem;

  }
}
export function bikeRide() {

  var randProb = Math.floor(Math.random() * 101)-1;
  if (randProb <= 20) {

    state.playerAP = parseInt(state.playerAP) + 2;
    alert("The bike trip energized you with 2 AP! You are now at "+state.playerAP+"!");
    return "ap";

  } else if (randProb <= 80) {

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

    var randomItem = getRandomItem();
    return randomItem;

  }
}

export function getRandomItem() {

  var rand = Math.floor(Math.random() * state.items.length);

  var fl = state.items[rand].title.substring(0,1);
  if (fl==='a'||fl==='e'||fl==='i'||fl==='o'||fl==='u') {
    alert('You found an '+state.items[rand].title+"!");
  } else {
    alert('You found a '+state.items[rand].title+"!");
  }
  state.playerItems.push(state.items[rand]);
  console.log(state);
  return state.items[rand];

}
export function getRandomEvent() {
  var rand = Math.floor(Math.random() * state.events.length);
  // alert('Got random event: '+state.events[rand].title);
  console.log(state.events[rand]);

  var eventR = state.events[rand];

  var health    = parseInt(state.events[rand].health);
  var ap        = parseInt(state.events[rand].ap);
  var strength  = parseInt(state.events[rand].strength);
  var toughness = parseInt(state.events[rand].toughness);

  state.playerStats[0].health     = parseInt(state.playerStats[0].health) + health;
  state.playerAP         = parseInt(state.playerAP) + ap;
  state.playerStats[0].strength   = parseInt(state.playerStats[0].strength) + strength;
  state.playerStats[0].toughness  = parseInt(state.playerStats[0].toughness) + toughness;


  if (health == 0 && ap == 0 && strength == 0 && toughness == 0) {
    var message = state.events[rand].title+' has no effect on you!';
  } else {
    var message = state.events[rand].title+'! It\'s effects on you are:';
  }

  if (health != 0) {
    if (health > 0) {
      message = message + '     +' + health +' HP';
    } else {
      message = message + '     -' + health +' HP';
    }
  }
  if (ap != 0) {
    if (ap > 0) {
      message = message + '     +' + ap +' AP';
    } else {
      message = message + '     -' + ap +' AP';
    }
  }
  if (strength != 0) {
    if (strength > 0) {
      message = message + '     +' + strength +' Strength';
    } else {
      message = message + '     -' + strength +' Strength';
    }
  }
  if (toughness != 0) {
    if (toughness > 0) {
      message = message + '     +' + toughness +' Toughness';
    } else {
      message = message + '     -' + toughness +' Toughness';
    }
  }
  alert(message);
  alert('Your Stats are now:  '+state.playerStats[0].health+' HP, '+state.playerStats[0].ap+' AP, '+state.playerStats[0].strength+' Strength, '+state.playerStats[0].toughness+' Toughness');

  if (state.playerStats[0].health <= 0) {
    alert("The event has killed you!");

    // Route to game over screen
    window.location.href = '/gameover';
  }

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
  state.playerStats[0].health     =   parseInt(state.playerStats[0].health) + 1;
  state.playerStats[0].ap         =   parseInt(state.playerStats[0].ap) + 1;
  state.playerStats[0].strength   =   parseInt(state.playerStats[0].strength) + 1;
  state.playerStats[0].toughness  =   parseInt(state.playerStats[0].toughness) + 1;
  state.level++;
  console.log('Now:');
  console.log(state.playerStats);
  alert("Your stats are now: "+state.playerStats[0].health+" HP, "+state.playerStats[0].ap+" AP, "+state.playerStats[0].strength+" Strength, "+state.playerStats[0].toughness+" Toughness!");
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
