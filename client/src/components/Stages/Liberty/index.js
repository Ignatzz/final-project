import React from "react";
import ButtonContainer from "../../ButtonContainer"
import "./liberty.css";
import tourist from "../../../images/enemies/tourist.png";
import Anime from 'react-anime';



const Liberty = () => {
    return (
        <div className="libertyStage">
        <ButtonContainer></ButtonContainer>
        <div className = "touristDiv">
        <Anime easing="easeOutElastic"
         duration={5000}
         delay={(el, index) => index * 4000}
         translateX='-35rem'
         >
         <img className="tourist" src={tourist} alt="frolf"></img>
        </Anime>
        </div>
      
    </div>
    )
  }



  export default Liberty;
 