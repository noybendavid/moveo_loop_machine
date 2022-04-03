import './App.scss'
import React from 'react';

const Cursor = ({ duration, isPlaying, shouldLoop}) => {



  return(
      <div className="cursor"
      // onDrop={e => handleDrop(e)}
      // onDragOver={e => handleDragOver(e)}
      // onDragEnter={e => handleDragEnter(e)}
      // onDragLeave={e => handleDragLeave(e)}
          style={{
            animationPlayState: isPlaying ? 'running' : 'paused',
            animationIterationCount: shouldLoop ? 'infinite' : 1,
            animationDuration: Math.floor(duration) + 's',
          }}>
      </div>
  );

}

export default Cursor;
