import React from 'react';
import './App.scss'
import Cursor from './Cursor';



const RightPanel = ({clips , isPlaying, shouldLoop, duration }) => {
  return <div className="right-panel col-8">
      {duration && <Cursor isPlaying={isPlaying} shouldLoop={shouldLoop} duration={duration}/>}
      {clips.map((soundTrack) => <div key={soundTrack.label} className="track-container">
          <div className="track" style={{background: soundTrack.color}}></div>
      </div>)}
  </div>
}

export default RightPanel;