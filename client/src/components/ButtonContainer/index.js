import React, {Component} from "react";
import {GameButtonA, GameButtonB, GameButtonC} from "../GameButtons";
import "./buttoncontainer.css"


const button = [GameButtonA, GameButtonB, GameButtonC];

class ButtonContainer extends Component {
    
    state = {
      button
    };
    handleClick = () => {
      console.log(this.state.id)
    }

    
render ()   {

    return (
        <div className = "gameButtonContainer">
            <GameButtonA/>
            <GameButtonB/>
            <GameButtonC/>
        </div>
      )
    }
  }

  export default ButtonContainer;