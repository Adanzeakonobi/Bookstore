import React from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import './style/progress.css';

const Progress = () => (
  <div className="progressContainer">
    <CircularProgressBar
      size={75}
      animationSmooth="1s ease-out"
      colorCircle="#f1f1f1"
      colorSlice="#0290ff"
      percent="64"
    />
    <div className="percentageProgress">
      <h3>64%</h3>
      <p>completed</p>
    </div>
  </div>
);

export default Progress;
