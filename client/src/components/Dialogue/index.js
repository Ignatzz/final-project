import React from 'react';
import SplitText from 'react-pose-text';


const charPoses = {
  exit: { opacity: 10, y: 400 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

function Dialouge (props) {
  return (
    <div className="container">
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        {this.props.dialouge}
      </SplitText>
    </div>
  );
}

export default Dialouge