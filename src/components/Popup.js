import React from 'react'
import './Popup.css'
import Play from './Play'


const Popup = (props) => { 
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={props.func} className='close-btn'>X</button>
                    <p className='text'>{props.text}</p>
                    <Play audio={props.audio}/>
                  
            </div>
        </div>
    ) :''
}

export default Popup