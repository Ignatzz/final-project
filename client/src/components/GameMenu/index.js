import React, {Component} from "react";
import "./gameMenu.css"
import soundIcon from "../../images/soundicon.png";

class GameMenu extends Component {

render ()   {

    return (
        <div className = "gameMenu">
            <div className = "menuTitle">Menu</div>
         <div className="gameMenuContainer row">
             <div className = "gameMenuItemDiv">  
             <table className="itemTable">
                 <th>Items</th>
             </table>
             </div> 
             <div className ="gameMenuStatsDiv">
             <table className="statsTable">
                 <th>Current Player Stats</th>
                 <br/>
                 <br/>
                 <tr>Player Level:</tr>
                 <br/>
                 <tr>HP:</tr>
                 <br/>
                 <tr>AP:</tr>
                 <br/>
                 <tr>Strength</tr>
                 <br/>
                 <tr>Toughness:</tr>
                 <br/>
                 <tr>XP:</tr>
             </table>
             </div>
             <div className="soundMenu">
                 <div className = "music row">
                     Music <img className="soundIcon1" src={soundIcon} alt="soundIcon"></img>
                 </div>
                 <div className = "effects row">
                     Effects <img className="soundIcon2" src={soundIcon} alt="soundIcon"></img>
                 </div>

             </div>
        <div className="exitButton">EXIT</div>
         </div>
        </div>
      )
    }
  }

  export default GameMenu;