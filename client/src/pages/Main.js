import React, { Component } from "react";
import Container from "../components/Container";
import {Row, Col} from "../components/rollCol"
import Svg from "../components/Svg/Svg"
import {NewGameBtn, ContinueBtn, AboutBtn} from "../components/MainMenu"

class Main extends Component {
  state = {
    newGame: "",
    contine: "",
    about: ""

  };

  // grab the books from /api/books
  // componentDidMount() {
  //   API.getBooks()
  //     .then(res => this.setState(
  //       { 
  //         books: res.data 
  //       },
  //       console.log(res.data)
  //       )
  //     )
  //     .catch(err => console.log(err));
  // }

  // // loads all books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // deletes a book
  // handleDeleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container>
        <Svg />
        <Row>
          <Col size="md-12">
          <NewGameBtn
          />
        </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <ContinueBtn
          />
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <AboutBtn
          />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Main;
