import React from 'react'
import '../styles/Popup.css'
import Play from './Play'
import Picture from '.Picture'

const Popup = (props) => { 
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={props.func} className='close-btn'><span style={{background:`#0309B8`}} role="img" aria-label="X">❌</span></button>
                    <p className='text'>{props.text}</p>
                    <Play audio={props.audio}/>
                    <Picture picture={props.picture} />
            </div>
        </div>
    ) :''
}

export default Popup