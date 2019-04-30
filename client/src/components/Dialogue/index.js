import React from "react";
import "./dialogue.css";

var dialogueOptions = 
{
    frisbee:  "Frisbee guy attacks you! Lorem ipsum dolor sit amet consectetur.",
    tourist: "Tourist guy whoops it up!"
}

function FrisbeeDialogue(choice) {
    return <h4>{dialogueOptions.frisbee}</h4>;
  }




  export {FrisbeeDialogue}

  