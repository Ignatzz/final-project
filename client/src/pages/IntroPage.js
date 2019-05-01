import React from "react";
import SplitText from "react-pose-text";
import IntroButton from "../components/introButton"
import "./intro.css"

const charPoses = {
    exit: { opacity: 0, y: 1000 },
    enter: {
      opacity: 95,
      y: 0,
      delay: ({ charIndex }) => charIndex * 80
    }
  };
const DialogueText = (props) => {

    return (
        <div className="dialogueContainer">
            <div className="textDiv text-center">
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        You arrive in Philadelphia only to find the city that you know and love has been overrun with yipsters, biker kids, and worst of all tourists. "Shitty" who is Gritty's evil clone know rules the city with an iron fist clutching a can of Pabst Blue Ribbion that he sips slow while his eyes gazes upon the chaos running a muck in the city. Only one person can stop his evil rain of terror, hey stop walking away!!!! It's you!!!!! Only you can save us from that clone that escaped from the Kesington meth lab!!!

      </SplitText>      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <IntroButton />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        </div>
        </div>

    )
}

export default DialogueText;













