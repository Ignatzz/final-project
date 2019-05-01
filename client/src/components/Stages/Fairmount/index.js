import React from "react";
import "./fairmount.css";
import ButtonContainer from "../../ButtonContainer"
import frolfboy from "../../../images/enemies/frolfboy.png";
import Anime from 'react-anime';
import { Link } from "react-router-dom"
import {FrisbeeDialogue} from "../../Dialogue"
import {Tourist, Mummer, FrolfBoy, Gritty} from "../../Enemies";
import CombatUI from "../../CombatUI";
import SplitText from "react-pose-text"


var introHappened = false;

class Intro extends React.Component {
    
    handleClick = () => {
        
    
        introHappened = true;
        
        return(
            <Fairmount></Fairmount>
        )

       }

       

       
    render() {
        const charPoses = {
            exit: { opacity: 0, y: 1000 },
            enter: {
              opacity: 95,
              y: 0,
              delay: ({ charIndex }) => charIndex * 80
            }
          };
        return(
        <div className="dialougeContainer">
        <div className="fairDiv text-center">
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
         You begin your serach for the terror known as Gritty at Fairmount Park which has become territory the frolf boys and tourist. 
         
         They litter park with no regard for personal space, tourists barrage you with geographical location questions and asking you to say "wuter". 
         </SplitText>
         <br />
         <br />
      <Link to="/fairmount" className="introNextButton" 
      style={{texttextAlign: "center"}}
      onClick={this.handleClick}>NEXT</Link>
      </div>
    </div>
    )
  }
}

const Fairmount = () => {
    if (!introHappened){
    return (
        <div className="fairmountStage">
        <Intro/>
        
            </div>
    )}
    else {
        return(
        <div className="fairmountStage">
            <FrisbeeDialogue/>
            <ButtonContainer/>
            <CombatUI/>
            <Tourist/>
            <FrolfBoy/>
            </div>
        )}
   
  }


   

  export {Fairmount}