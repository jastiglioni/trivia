import React from 'react'
import '../styles/Popup.css'
import Play from './Play'

const Popup = (props) => { 
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={props.func} className='close-btn'><span style={{background:`#0309B8`}} role="img" aria-label="X">❌</span></button>
                    <p className='text'>{props.text}</p>
                    <Play audio={props.audio}/>
            </div>
        </div>
    ) :''
}

export default Popup