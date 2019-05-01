import React from 'react';
import posed from 'react-pose';
import { Link } from "react-router-dom"
import "./introbutton.css"

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
    return <Button className="btn btn-dark" style={{textAlign: "center"}} pose={isVisible ? 'visible' : 'hidden'}>
    <Link to="/main">
    <h4 className="introText">Go forth and stop Gritty!!!!</h4>
    </Link>
    </Button>
    
  }
}

export default IntroButton