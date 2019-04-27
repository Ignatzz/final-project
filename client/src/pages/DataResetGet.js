import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";
//import ReactTimeout from 'react-timeout';

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
        this.makePlayers(10);
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
      name: "Sam",
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
        this.makeEvents(10);
      }
      .bind(this),
      1000
    );
  };
  makeEvents = (quantity) => {
    for (var i = 0; i < quantity; i++) {
      this.makeEvent();
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
  makeEvent = () => {
    // console.log("Making event");
    var req = {
      id: "0",
      title: "Event",
      subtext: "subtext",
      picURL: "picURL",
      health: "health",
      ap: "ap",
      strength: "strength",
      toughness: "toughness",
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
        this.makeItems(10);
      }
      .bind(this),
      1000
    );
  };
  makeItems = (quantity) => {
    for (var i = 0; i < quantity; i++) {
      this.makeItem();
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
  makeItem = () => {
    // console.log("Making event");
    var req = {
      id: "0",
      title: "Item",
      subtext: "subtext",
      picURL: "picURL",
      health: "health",
      ap: "ap",
      strength: "strength",
      toughness: "toughness",
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
