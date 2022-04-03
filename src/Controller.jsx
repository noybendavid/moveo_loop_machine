import React from 'react';
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faInfinity} from '@fortawesome/free-solid-svg-icons'


const Controller = ({ clips, setIsPlaying, shouldLoop, setShouldLoop }) => {

    const onPlay = () => clips.map(item => {
    item.audio.play();
    setIsPlaying(true);
  });

  const onStop = () => clips.map(item => {
    item.audio.currentTime = 0;
    item.audio.pause();
    setIsPlaying(false);
  });

  const onLoop = () => setShouldLoop(!shouldLoop);

  return (
      <div>
        <button className='btn' onClick={onPlay}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className='btn' onClick={onStop}>
          <FontAwesomeIcon icon={faStop} />
        </button>
        <button className='btn' onClick={onLoop}>
          <FontAwesomeIcon icon={faInfinity} />
        </button>
      </div>
  );
}

export default Controller;

