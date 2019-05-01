import React, {Component} from "react";
import "./gameMenu.css"
import soundIcon from "../../images/soundicon.png";
import {Howl, Howler} from 'howler';
import tiger from "../../sounds/eyetiger.mp3"
import * as utils from "../../pages/SamTest"


class GameMenu extends Component {
    SoundPlay = event => {
        const Sound = new Howl({
          src: tiger,
          autoplay: true,
          volume: 0.5,
          loop: true
              });
      }
    SoundToggle = event => {
        console.log(this.Sound);
      }

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
            <br/>
                 <br/>
                 <br/>
             </div>
             <div className="soundMenu">
                 <div className = "music row">
                     Music <img onClick={this.SoundPlay} className="soundIcon1" src={soundIcon} alt="soundIcon"></img>
                 </div>
                 <div className = "effects row">
                     Effects <img onClick={(this.SoundToggle)}className="soundIcon2" src={soundIcon} alt="soundIcon"></img>
                 </div>

             </div>
        <div className="exitButton" onClick={utils.closeMenu}>EXIT</div>
         </div>
        </div>
      )
    }
  }

  export default GameMenu;