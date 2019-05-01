import React from 'react';
import posed from 'react-pose';
import { Link } from "react-router-dom"

const Button = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class IntroButton extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <Button className="btn btn-dark" style={{textAlign: "center", height: "200", width: "400px"}} pose={isVisible ? 'visible' : 'hidden'}>
    <Link to="/fairmount">
    <h3 className="introText">Go forth and stop Gritty!!!!</h3>
    </Link>
    </Button>
  }
}

export default IntroButton