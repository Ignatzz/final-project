import React, {Component} from "react";
import "./combatUI.css"
import {RegAttackButton, SpecAttackButton, UseItemButton} from "../CombatButtons"

class CombatUI extends Component {

render ()   {

    return (
        <div className = "combatUI">
            <RegAttackButton></RegAttackButton>
            <SpecAttackButton></SpecAttackButton>
            <UseItemButton></UseItemButton>
        </div>
      )
    }
  }

  export default CombatUI;