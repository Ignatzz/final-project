import React, {Component} from "react";
import {PlayerHealthBar, PlayerAPBar, RegAttackButton, SpecAttackButton, UseItemButton} from "../CombatButtons"

class CombatUI extends Component {

render ()   {

    return (
      <div>
        <PlayerHealthBar/>
        <PlayerAPBar/>
        <div className = "combatUI">
            <RegAttackButton></RegAttackButton>
            <SpecAttackButton></SpecAttackButton>
            <UseItemButton></UseItemButton>
        </div>
        </div>
      )
    }
  }


  export default CombatUI;