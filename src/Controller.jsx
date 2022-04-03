import React from 'react';
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faInfinity} from '@fortawesome/free-solid-svg-icons'


const Controller = ({ clips, setIsPlaying, shouldLoop, setShouldLoop }) => {
    
    //handle the on click event - play button 
    const onPlay = () => clips.map(item => {
    item.audio.play();
    setIsPlaying(true);
  });

 //handle the on click event - stop button 
  const onStop = () => clips.map(item => {
    item.audio.currentTime = 0;
    item.audio.pause();
    setIsPlaying(false);
  });

  // //handle the on click event - loop button 
  const onLoop = () => setShouldLoop(!shouldLoop);

  return (
      <div>
        <button className='btn' onClick={onPlay}>
          <FontAwesomeIcon icon={faPlay} style={{color: "white"}} />
        </button>
        <button className='btn' onClick={onStop}>
          <FontAwesomeIcon icon={faStop} style={{color: "white"}}/>
        </button>
        <button className='btn' onClick={onLoop}>
        {shouldLoop ? (
           <FontAwesomeIcon icon={faInfinity} className="redcolor" />
        ) : (
          <FontAwesomeIcon icon={faInfinity} style={{color: "white"}}/>
          )} 
        </button>
      </div>
  );
}

export default Controller;
