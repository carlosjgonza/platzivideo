import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreen.js';
import './full-screen.css';

function FullScreen(props) {
  return (
    <div 
      className="FullScreen"
      onClick={props.handleFullScreenClick}
    >
      <FullScreenIcon 
        size={25}
        color="white"
      />
    </div>
  )
}

export default FullScreen;