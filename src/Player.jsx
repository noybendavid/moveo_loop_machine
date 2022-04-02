import React, { useState, useEffect} from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import Cursor from './Cursor';

const Player = ({ item }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [countOfProgress, setcountOfProgress] = useState(0);
  debugger;
  useEffect(() => {
      setInterval(() => {
        let cuurPro = item.audio.currentTime * 100; 
        let lengthSong = item.audio.duration;
        setcountOfProgress(cuurPro / lengthSong);
      },500);
    }, []);


    /*import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
             <ProgressBar now={countOfProgress}/>

 */
    
  
  const onClick = e => {
    item.audio.muted = isMuted;
    return setIsMuted(!isMuted);
  }
  
  return (
    <div className='audio'>
       <div className='container'>
         <div className='row'>
           <div className='col-4'>
          <h3>{item.lable}</h3>
              <button className='btnPlay' onClick={onClick} >
              {(!isMuted) ? <FontAwesomeIcon icon={faVolumeMute} /> : 
               <FontAwesomeIcon icon={faVolumeHigh}/>}
             </button>
             </div>
             <div className='col-8'>
               <progress max={100} min={0} value={countOfProgress}></progress>
          </div>
        </div>
        </div>
        <div>
          <Cursor countOfProgress={countOfProgress} setcountOfProgress={setcountOfProgress} item={item}/>
        </div>
    </div>



  );

}

/*<div className='progress'>
             <div class="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemax={100} aria-valuemin={0} ></div>
             </div>*/ 
export default Player;