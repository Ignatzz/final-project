import React from "react";
import "./fairmount.css";
import ButtonContainer from "../../ButtonContainer"
import frolfboy from "../../../images/enemies/frolfboy.png";
import Anime from 'react-anime';
import { Link } from "react-router-dom"
import {FrisbeeDialogue} from "../../Dialogue"
import {Tourist, Mummer, FrolfBoy, Gritty} from "../../Enemies";
import CombatUI from "../../CombatUI";

var introHappened = false;

class Intro extends React.Component {
    
    handleClick = () => {
        
    
        introHappened = true;
        
        return(
            <Fairmount></Fairmount>
        )

       }
    render() {
        return(
        <div >
         <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod culpa laborum iusto neque ea quibusdam, similique rerum? Aliquid voluptatum ex tempora rerum quis, incidunt autem. Earum at quos asperiores. 

         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod culpa laborum iusto neque ea quibusdam, similique rerum? Aliquid voluptatum ex tempora rerum quis, incidunt autem. Earum at quos asperiores.
         </h4>
      <Link to="/fairmount" className="introNextButton" onClick={this.handleClick}>NEXT</Link>
      
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