<<<<<<< HEAD
import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import API from "../utils/API";

class SamTest extends Component {

  state = {
    events: []
  };

  // get all events from /api/events on load
  componentDidMount() {
    API.getEvents()
      .then(res => this.setState(
        {
          events: res.data
        },
        console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }

  // get all events from /api/events
  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // saveEvent = req => {
  //   console.log(req);
  //   API.saveEvent(req)
  //     .then(
  //     )
  // }

  makeUser = () => {
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

    API.getPlayers()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));
  };

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
          <button className="btn btn-dark" onClick={this.makeUser} style={{width: "80%", height: "85px", marginRight: "0", fontSize: "30px", marginbottom: "40px"}}>
            Test
          </button>
        </div>
      </Container>
    )
  }
}

export default SamTest;
=======
// import React, { Component } from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Card from "../components/Card";
// import API from "../utils/API2";
//
// class SamTest extends Component {
//
//   state = {
//     events: []
//   };
//
//   // get all events from /api/events on load
//   componentDidMount() {
//     API.getEvents()
//       .then(res => this.setState(
//         {
//           events: res.data
//         },
//         console.log(res.data)
//         )
//       )
//       .catch(err => console.log(err));
//   }
//
//   // get all events from /api/events
//   loadEvents = () => {
//     API.getEvents()
//       .then(res =>
//         this.setState({ books: res.data })
//       )
//       .catch(err => console.log(err));
//   };
//
//   // saveEvent = req => {
//   //   console.log(req);
//   //   API.saveEvent(req)
//   //     .then(
//   //     )
//   // }
//
//   handleDeleteEvent = id => {
//     API.deleteEvent(id)
//       .then(res => this.loadEvents())
//       .catch(err => console.log(err));
//   }
//
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col size="md-12">
//             {this.state.events.length ? (
//               <Card heading="Saved Events">
//                 {this.state.events.map(event => (
//                   <h4>{event.title}</h4>
//                 ))}
//                 </Card>
//             ) : (
//               <Card heading="Saved Events">
//                 <h4>None</h4>
//               </Card>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }
//
// export default SamTest;
>>>>>>> 9e3a3ca5c38de78c986af78958b90fa19ae90504
