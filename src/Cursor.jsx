import './App.scss'
import React, {useState} from 'react';


const Cursor = ({position, onTimeChange }) => {
    const [value, setValue] = useState(position);
    
    //triggered when the user releases the mouse
    const onChange = e => {
        onTimeChange(e.target.value);
        setValue(e.target.value);
    };

    return (
        <input className="cursor"
               value={value}
               step='0.01'
               min="1" max="100"
               onChange={onChange}
               type="range"
        >
        </input>
    );

}

export default Cursor;
