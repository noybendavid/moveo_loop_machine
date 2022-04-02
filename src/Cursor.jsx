import './App.css'
import React, {useEffect} from 'react';




const Cursor = ({countOfProgress, setcountOfProgress, item}) => {


  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect (() => {

    
  }, [])


  return(

      <div draggable className='line'  
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)} 
      style={{animationDuration : item.audio.duration }}>
      </div>



  );

}

export default Cursor;