import React from "react";
import SplitText from "react-pose-text";

const charPoses = {
    exit: { opacity: 0, y: 1000 },
    enter: {
      opacity: 95,
      y: 0,
      delay: ({ charIndex }) => charIndex * 80
    }
  };
const ScrollingText = (props) => {

    return (
        <div className="dialogueContainer">
            <div className="textDiv text-center">
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
      </SplitText>   
      </div>
      </div>
    )
}

export default ScrollingText;













