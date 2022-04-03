import './App.scss';
import {React, useEffect, useRef, useState} from 'react';
import Controller from './Controller';
import Drums from './audioclips/DRUMS.mp3'
import He from './audioclips/HE.mp3'
import Uuho from './audioclips/UUHO.mp3'
import Lead from './audioclips/LEAD.mp3'
import Jibrish from './audioclips/JIBRISH.mp3'
import High from './audioclips/HIGH.mp3'
import B from './audioclips/B.mp3'
import All from './audioclips/all.mp3'
import shake from './audioclips/shake.mp3'
import Cursor from './Cursor';
import LeftPanel from './LeftPanel';

//List of audio files 
const audioClips = [
    {src: Drums, label: 'Drums', color: 'purple'},
    {src: He, label: 'He', color: 'lightcoral'},
    {src: Uuho, label: 'Uuho', color: 'yellow'},
    {src: Lead, label: 'Lead', color: 'lightgreen'},
    {src: Jibrish, label: 'Jibrish', color: 'lightpink'},
    {src: High, label: 'High', color: 'lightseagreen'},
    {src: B, label: 'B', color: 'lightsalmon'},
    {src: All, label: 'All', color: 'darkgrey'},
    {src: shake, label: 'shake', color: 'lightskyblue'}
];


function App() {
    const [clips, setClips] = useState(audioClips || []);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldLoop, setShouldLoop] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [duration, setDuration] = useState(0);

    
    //Update the Cursor position with the current time of the audio
    const RightPanel = () => {

        const updateTime = value => {
             setPercentage(value);
             setCurrentTime((duration / 100) * value);
        }

        return <div className="right-panel col-8">
            {duration && <Cursor position={percentage} onTimeChange={updateTime}/>}
            {clips.map((soundTrack) => <div key={soundTrack.label} className="track-container">
                <div className="track" style={{background: soundTrack.color}}></div>
            </div>)}
        </div>
    }
    //create new Audio for each element and update the list
    useEffect(() => {
        const updatedClips = clips.map(item => {
            item.audio = new Audio(item.src);
            item.audio.onloadeddata = function () {
                setDuration(this.duration);
                setIsReady(true);
            };
            return item;
        });
        setClips(updatedClips);
    }, []);

   //Each time the state isPlaying or shouldLoop change we target the ontimeupdate event and updateds the state -> Percentage
    useEffect(() => {
        clips.map(item => {
            item.audio.ontimeupdate = function () {
                const timeLeft = this.duration - this.currentTime;
                const progress = (this.currentTime / this.duration).toFixed(2);
                setPercentage(+(progress * 100).toFixed(2))
                //to fix the delay
                if (shouldLoop && timeLeft <= 1 && timeLeft > 0) {
                    this.currentTime = 0;
                    this.play();
                }
                if(item.audio.ended === true){
                    setPercentage(1);
                }
            };
            return item;
        });
    }, [isPlaying, shouldLoop]);

   //Sets the audio position according to the position of the
   //Cursor on the screen
   useEffect(() => {
        clips.map(item => item.audio.currentTime = currentTime);
    }, [currentTime]);


    return (
        <div className="App">
            <h2><span className='redcolor'>Loop</span><span className='machinecolor'>Machine</span></h2>
            {isReady ?
                <div className="container playlist">
                    <div className="row player">
                        <LeftPanel clips={clips} setClips={setClips}/>
                        <RightPanel/>
                    </div>
                    <div className="row controller">
                        <Controller
                            clips={clips}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            shouldLoop={shouldLoop}
                            setShouldLoop={setShouldLoop}/>
                    </div>
                </div> :
                <div>loading...</div>
            }
        </div>
    );
}

export default App;
