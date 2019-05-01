import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";

class DataResetGet extends Component {
  state = {
    events: []
  };

  // Functions
  // ----------------------
  // resetAll() = calls resetPayers() then resetEvents() then resetItems()
  //
  // resetPlayers() = Deletes players and calls makePlayers(10)
  // makePlayers(quantity) = Calls makePlayer x quantity then displays after 5s
  // makePlayer() = Makes a player... duh
  //
  // resetEvents() = Deletes players and calls makeEvents(10)
  // makeEvents(quantity) = Calls makeEvent x quantity then displays after 5s
  // makeEvent() = Makes a player... duh
  //
  // resetItems() = Deletes players and calls makeItems(10)
  // makeItems(quantity) = Calls makeItem x quantity then displays after 5s
  // makeItem() = Makes a player... duh
  //
  resetAll = () => {
    setTimeout(
      function() {
        this.resetPlayers();
      }
      .bind(this),
      1000
    );
    setTimeout(
      function() {
        this.resetEvents();
      }
      .bind(this),
      2000
    );
    setTimeout(
      function() {
        this.resetItems();
      }
      .bind(this),
      3000
    );
  }

  resetPlayers = () => {
    API.getPlayers()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));

    API.deletePlayers()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));

    setTimeout(
      function() {
        this.makePlayers(1);
      }
      .bind(this),
      1000
    );
  };
  makePlayers = (quantity) => {

    for (var i = 0; i < quantity; i++) {
      this.makePlayer();
    }

    setTimeout(
      function() {
        API.getPlayers()
          .then(res =>
            console.log(res.data)
          )
          .catch(err => console.log(err));
      }
      .bind(this),
      5000
    );
  };
  makePlayer = () => {
    console.log("Making user");
    var req = {
      name: "Player 1",
      health: "10",
      ap: "10",
      strength: "10",
      toughness: "10"
    }
    API.savePlayer(req)
      .then();

    console.log("Player saved");
  };

  resetEvents = () => {
    API.getEvents()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));

    API.deleteEvents()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));

    setTimeout(
      function() {
        // this.makeEvents(10);
        this.makeRealEvents();
      }
      .bind(this),
      1000
    );
  };

  makeRealEvents = () => {
    var realEvents = [
      {id:'0',title:'Hit by a Septa Bus',subtext:'',picURL:'',health:'-100',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'1',title:'Hit by Girard Trolly',subtext:'',picURL:'',health:'-2',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'2',title:'Ran Up Rocky Steps',subtext:'',picURL:'',health:'0',ap:'0',strength:'2',toughness:'0',specialCode:''}
      ,{id:'3',title:'Visited the Art Museum',subtext:'',picURL:'',health:'0',ap:'1',strength:'0',toughness:'0',specialCode:''}
      ,{id:'4',title:'Drunk On South Street',subtext:'',picURL:'',health:'0',ap:'-2',strength:'0',toughness:'1',specialCode:''}
      ,{id:'5',title:'Find $20',subtext:'',picURL:'',health:'0',ap:'1',strength:'0',toughness:'0',specialCode:''}
      ,{id:'6',title:'Took a Coding Bootcamp Class',subtext:'',picURL:'',health:'1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'7',title:'Found a red mushroom',subtext:'',picURL:'',health:'1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'8',title:'Hit a Pothole',subtext:'',picURL:'',health:'-1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'9',title:'Car Falls into a Sinkhole',subtext:'',picURL:'',health:'-2',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'10',title:'Got a Parking Ticket',subtext:'',picURL:'',health:'0',ap:'-1',strength:'0',toughness:'0',specialCode:''}
      ,{id:'11',title:'Yipsters Call the Cops for You Jaywalking',subtext:'',picURL:'',health:'-1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'12',title:'You Found One Extra Wing in Your 10 Piece ',subtext:'',picURL:'',health:'1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'13',title:'Stubbed Your Toe & Only Shed One Tear',subtext:'',picURL:'',health:'0',ap:'0',strength:'0',toughness:'1',specialCode:''}
      ,{id:'14',title:'Burned by the Fryer at Federal Donuts',subtext:'',picURL:'',health:'-1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'15',title:'Had Brunch at Sabrinas',subtext:'',picURL:'',health:'1',ap:'0',strength:'0',toughness:'-1',specialCode:''}
      ,{id:'16',title:'Went to Made in America',subtext:'',picURL:'',health:'1',ap:'-2',strength:'0',toughness:'0',specialCode:''}
      ,{id:'17',title:'Got Lost in Reading Terminal',subtext:'',picURL:'',health:'0',ap:'-1',strength:'0',toughness:'0',specialCode:''}
      ,{id:'18',title:'You Actually Went to the Gallery',subtext:'',picURL:'',health:'-1',ap:'-1',strength:'0',toughness:'0',specialCode:''}
      ,{id:'19',title:'Pat Burrell Steals Your Girlfriend, *insert name*',subtext:'',picURL:'',health:'0',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'20',title:'Dollar Dog Night',subtext:'',picURL:'',health:'1',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'21',title:'Caught in Parade Down Fairmount',subtext:'',picURL:'',health:'0',ap:'-2',strength:'0',toughness:'0',specialCode:''}
      ,{id:'22',title:'Spilled Hot Chocolate During Hot Chocolate Marathon',subtext:'',picURL:'',health:'-1',ap:'0',strength:'1',toughness:'0',specialCode:''}
      ,{id:'23',title:'Caught in a Flash Mob',subtext:'',picURL:'',health:'-1',ap:'0',strength:'0',toughness:'0',specialCode:''}
    ];

    for (var i = 0; i < realEvents.length; i++) {
      API.saveEvent(realEvents[i])
        .then();
    }
    console.log("Item saved");
  }

  makeEvents = (quantity) => {
    for (var i = 0; i < quantity; i++) {
      this.makeEvent(i);
    }
    setTimeout(
      function() {
        API.getEvents()
          .then(res =>
            console.log(res.data)
          )
          .catch(err => console.log(err));
      }
      .bind(this),
      5000
    );
  };
  makeEvent = (index) => {
    // console.log("Making event");

    var hp = (Math.floor(Math.random()*2)).toString();
    var ap = (Math.floor(Math.random()*2)).toString();
    var strength = (Math.floor(Math.random()*2)).toString();
    var toughness = (Math.floor(Math.random()*2)).toString();

    var req = {
      id: index,
      title: "Event",
      subtext: "subtext",
      picURL: "picURL",
      health: hp,
      ap: ap,
      strength: strength,
      toughness: toughness,
      specialCode: "specialCode"
    }
    API.saveEvent(req)
      .then();

    console.log("Event saved");
  };

  resetItems = () => {
    API.getItems()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));

    API.deleteItems()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));

    setTimeout(
      function() {
        // this.makeItems(10);
        this.makeRealItems();
      }
      .bind(this),
      1000
    );
  };

  makeRealItems = () => {
    var realItems = [
      {id:'1',title:'Primo Hoagie',subtext:'You find a sandwich bursting with Italian meats.',picURL:'',health:'2',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'2',title:'Roast Pork Sandwich',subtext:'',picURL:'',health:'2',ap:'0',strength:'0',toughness:'0',specialCode:''}
      ,{id:'3',title:'Septa Token',subtext:'A relic from the past. ',picURL:'',health:'0',ap:'2',strength:'0',toughness:'0',specialCode:''}
      ,{id:'4',title:'Arctic Splash',subtext:'',picURL:'',health:'0',ap:'2',strength:'0',toughness:'0',specialCode:''}
      ,{id:'5',title:'Cheap Beer',subtext:'',picURL:'',health:'0',ap:'0',strength:'2',toughness:'0',specialCode:''}
      ,{id:'6',title:'Super Bowl Ring',subtext:'',picURL:'',health:'0',ap:'0',strength:'2',toughness:'0',specialCode:''}
      ,{id:'7',title:'Federal Donut',subtext:'',picURL:'',health:'0',ap:'1',strength:'0',toughness:'1',specialCode:''}
      ,{id:'8',title:'Glenn’s Bow Tie',subtext:'',picURL:'',health:'0',ap:'1',strength:'0',toughness:'1',specialCode:''}
      ,{id:'9',title:'Wooder Ice',subtext:'',picURL:'',health:'1',ap:'0',strength:'0',toughness:'0',specialCode:''}
    ];

    for (var i = 0; i < realItems.length; i++) {
      API.saveItem(realItems[i])
        .then();
    }
    console.log("Item saved");
  }

  makeItems = (quantity) => {
    for (var i = 0; i < quantity; i++) {
      this.makeItem(i);
    }
    setTimeout(
      function() {
        API.getItems()
          .then(res =>
            console.log(res.data)
          )
          .catch(err => console.log(err));
      }
      .bind(this),
      5000
    );
  };
  makeItem = (index) => {
    // console.log("Making event");
    var hp = (Math.floor(Math.random()*2)).toString();
    var ap = (Math.floor(Math.random()*2)).toString();
    var strength = (Math.floor(Math.random()*2)).toString();
    var toughness = (Math.floor(Math.random()*2)).toString();

    var req = {
      id: index,
      title: "Item",
      subtext: "subtext",
      picURL: "picURL",
      health: hp,
      ap: ap,
      strength: strength,
      toughness: toughness,
      specialCode: "specialCode"
    }
    API.saveItem(req)
      .then();

    console.log("Item saved");
  };

  // get all events from /api/events on load
  componentDidMount() {
    this.resetAll();
  }

  handleDeleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <div>
          <div size="md-12">
            {this.state.events.length ? (
              <Card heading="Saved Events">
                {this.state.events.map(event => (
                  <h4>{event.title}</h4>
                ))}
                </Card>
            ) : (
              <Card heading="Saved Events">
                <h4>None</h4>
              </Card>
            )}
          </div>
          <button className="btn btn-dark" onClick={this.makePlayer} style={{width: "50%", height: "50%", marginRight: "0", fontSize: "30px", marginbottom: "40px"}}>
            Test
          </button>
        </div>
      </Container>
    )
  }
}

export default DataResetGet;
