import React, { Component } from "react";
import ButtonContainer from "../components/ButtonContainer"
import Anime from 'react-anime';
import { Link } from "react-router-dom"
import {Tourist, Mummer, FrolfBoy, Gritty} from "../components/Enemies";
import CombatUI from "../components/CombatUI";

const Combat = () => {
    return (
        <div >
        <div className="fairmountStage">
            <CombatUI/>
            <FrolfBoy/>
            </div>
          
      
    </div>
    )
  }

  export default Combat;
  


