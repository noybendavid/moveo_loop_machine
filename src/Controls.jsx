import React, {useState} from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faInfinity} from '@fortawesome/free-solid-svg-icons'


const Controls = ({clips}) => {

  const [isLoop, setisLoop] = useState(true);


  const onLoop = e => {
    if(isLoop){
      console.log('loop is on')
      clips.map((item)=> { item.audio.loop = true;})
      setisLoop(false)
    } else {
      console.log('loop is off')
      clips.map((item)=> {item.audio.loop = false;})
      setisLoop(true)
    }
    
  }
  

  return (

  <div className='controls'>
    <div className='footer'>
      <button className='btn' onClick={() => {clips.map((item)=> {return item.audio.play();})}}>
       <FontAwesomeIcon icon={faPlay} />
      </button>
      <button className='btn' onClick={() => {clips.map((item)=>{item.audio.pause();item.audio.currentTime = 0;})}}>
       <FontAwesomeIcon icon={faStop} />
      </button>
      <button className='btn' onClick={onLoop}>
        <FontAwesomeIcon icon={faInfinity} />
      </button>
    </div>
  </div>
   


  
  );



}

export default Controls;
