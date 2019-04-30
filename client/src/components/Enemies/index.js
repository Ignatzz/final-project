import React from "react";
import tourist from "../../images/enemies/tourist.png";
import mummer from "../../images/enemies/drunkmummer.png"
import frolfboy from "../../images/enemies/frolfboy.png"
import gritty from "../../images/enemies/gritty.png"
import Anime from 'react-anime';
import "./enemies.css"


const Tourist = () => {
    return (
        <div className = "touristDiv">
        <Anime easing="easeOutElastic"
         duration={5000}
         delay={(el, index) => index * 4000}
         translateX='-35rem'
         >
         <img className="tourist" src={tourist} alt="tourist"></img>
        </Anime>
        </div>
    )
  }

  
const Mummer = () => {
    return (
        <div className = "mummerDiv">
        <Anime easing="easeOutElastic"
         duration={5000}
         delay={(el, index) => index * 4000}
         translateX='-35rem'
         >
         <img className="mummer" src={mummer} alt="mummer"></img>
        </Anime>
        </div>
    )
  }

  const FrolfBoy = () => {
    return (
        <div className = "frolfDiv">
        <Anime easing="easeOutElastic"
         duration={5000}
         delay={(el, index) => index * 4000}
         translateX='-35rem'
         >
         <img className="frolfBoy" src={frolfboy} alt="frolf"></img>
        </Anime>
        </div>
    )
  }

  const Gritty = () => {
    return (
        <div className = "grittyDiv">
        <Anime easing="easeOutElastic"
         duration={5000}
         delay={(el, index) => index * 4000}
         translateX='-35rem'
         >
         <img className="gritty" src={gritty} alt="gritty"></img>
        </Anime>
        </div>
    )
  }

  export {Tourist}

  export {Mummer}

  export {FrolfBoy}
  
  export {Gritty}