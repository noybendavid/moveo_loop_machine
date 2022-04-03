import './App.scss';
import {React, useEffect, useState} from 'react';
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
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel'


const audioClips = [
    {src: Drums, label: 'Drums', color: 'lightblue'},
    {src: He, label: 'He', color: 'lightcoral'},
    {src: Uuho, label: 'Uuho', color: 'lightgoldenrodyellow'},
    {src: Lead, label: 'Lead', color: 'lightgreen'},
    {src: Jibrish, label: 'Jibrish', color: 'lightpink'},
    {src: High, label: 'High', color: 'lightseagreen'},
    {src: B, label: 'B', color: 'lightsalmon'},
    {src: All, label: 'All', color: 'lightgrey'},
    {src: shake, label: 'shake', color: 'lightskyblue'}
];


function App() {
    const [clips, setClips] = useState(audioClips || []);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldLoop, setShouldLoop] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [duration, setDuration] = useState(0);


  

    useEffect(() => {
        const updatedClips = clips.map(item => {
            item.audio = new Audio(item.src);
            item.audio.onloadeddata = function () {
                setDuration(this.duration);
                setIsReady(true);
            };
            item.audio.preload = 'metadata';
            return item;
        });

        setClips(updatedClips);
    }, []);

    useEffect(() => {
        const updatedList = clips.map(item => {
            item.audio.ontimeupdate = function () {
                const timeLeft = this.duration - this.currentTime;
                if (shouldLoop && timeLeft <= 1 && timeLeft > 0) {
                    this.currentTime = 0;
                    this.play();
                }
            };
            return item;
        });
        setClips(updatedList);
    }, [isPlaying, shouldLoop]);
    return (
        <div className="App">
            <h2>LoopMachine</h2>
            {isReady ?
                <div className="container">
                    <div className="row player">
                        <LeftPanel clips={clips} setClips={setClips}/>
                        <RightPanel isPlaying={isPlaying} shouldLoop={shouldLoop} duration={duration}
                         clips={clips}/>
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