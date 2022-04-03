import React from "react";
import './App.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVolumeHigh, faVolumeMute} from '@fortawesome/free-solid-svg-icons';

//LeftPanel handle and present the name of the song 
//And handle with mute btn 

const LeftPanel = ({clips, setClips}) => {
  const onMute = label => e => {
      return setClips(clips.map(item => {
          if (item.label === label)
              item.audio.muted = !item.audio.muted;
          return item;
      }))
  };

  return (
  <div className='left-panel col-4'>
      {clips.map(soundTrack => {
          return (<div key={soundTrack.label} className="row">
              <div className="col label">{soundTrack.label}</div>
              <div className="col">
                  <button className="btn-play" onClick={onMute(soundTrack.label)}>
                      {!soundTrack.audio.muted ? <FontAwesomeIcon icon={faVolumeHigh} style={{color: "white"}}/> :
                          <FontAwesomeIcon icon={faVolumeMute} className="redcolor" />}
                  </button>
              </div>
          </div>)
      })}
  </div>
  );
}

export default LeftPanel;
