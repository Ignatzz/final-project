import React from "react";
import "./fairmount.css";
import ButtonContainer from "../../ButtonContainer"
import frolfboy from "../../../images/enemies/frolfboy.png";
import Anime from 'react-anime';



const Fairmount = () => {
    return (
        <div className="fairmountStage">
        <ButtonContainer/>
        <div className = "frolfDiv">
        <Anime easing="easeOutElastic"
         duration={3000}
         direction="left"
         delay={(el, index) => index * 240}
         translateX='-13rem'
         scale={[.75, .9]}>
         <img className="frolfBoy" src={frolfboy} alt="frolf"></img>
  </Anime>
        </div>
            </div>
    )
  }


   

  export default Fairmount;
 