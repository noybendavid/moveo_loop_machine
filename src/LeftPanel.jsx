import React from 'react';
import './App.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVolumeHigh, faVolumeMute} from '@fortawesome/free-solid-svg-icons'

const Player = ({clips , setClips}) => {


  const onMute = label => e => {
      setClips(clips.map(item => {
          if (item.label === label)
              item.audio.muted = !item.audio.muted;
          return item;
      }))
  };
  return <div className='left-panel col-4'>
      {clips.map(soundTrack => {
          return (<div key={soundTrack.label} className="row">
              <div className="col label">{soundTrack.label}</div>
              <div className="col">
                  <button className="btn-play" onClick={onMute(soundTrack.label)}>
                      {!soundTrack.audio.muted ? <FontAwesomeIcon icon={faVolumeHigh}/> :
                          <FontAwesomeIcon icon={faVolumeMute}/>}
                  </button>
              </div>
          </div>)
      })}
  </div>
}

export default Player;