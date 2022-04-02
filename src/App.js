import './App.css';
import {React, useEffect, useRef, useState} from 'react';
import Player from './Player';
import Controls from './Controls';
import Drums from './audioclips/DRUMS.mp3'
import He from './audioclips/HE.mp3'
import Uuho from './audioclips/UUHO.mp3'
import Lead from './audioclips/LEAD.mp3'
import Jibrish from './audioclips/JIBRISH.mp3'
import High from './audioclips/HIGH.mp3'
import B from './audioclips/B.mp3'
import All from './audioclips/all.mp3'
import shake from './audioclips/shake.mp3'


const audioclips = [
  {sound: Drums, lable: 'Drums', color: 'lightblue'},
  {sound: He, lable: 'He', color: 'lightcoral'},
  {sound: Uuho, lable: 'Uuho', color: 'lightgoldenrodyellow'},
  {sound: Lead, lable: 'Lead', color: 'lightgreen'},
  {sound: Jibrish, lable: 'Jibrish', color: 'lightpink'},
  {sound: High, lable: 'High', color: 'lightseagreen'},
  {sound: B, lable: 'B', color: 'lightsalmon'},
  {sound: All , lable: 'All', color: 'lightgrey'},
  {sound: shake, lable:'shake', color: 'lightskyblue'}
];

function App() {

  const [clips, setClips] = useState(audioclips);


 useEffect(()=>{
   console.log('hello');
   clips.map((item) => {item.audio = new Audio(item.sound)});
  
  //  playSoundsHanlder = () => { audioclips.map((item) => item.audio.play())}
   // playSoundsHanlder();item.isMute = false;
 },[]) 


  

  return (
    <div className="App">
      <h2>LoopMachine </h2>
       <div>
         {console.log(clips)}{
         clips.map((item) => 
         <Player item={item}/>)}
       </div>
       <div>
         <Controls clips={clips} />
       </div>
      </div>
  );
}

export default App;
