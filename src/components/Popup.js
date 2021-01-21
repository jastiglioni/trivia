import React from 'react'
import './Popup.css'
const Popup = (props) => { 
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={props.func} className='close-btn'>X</button>
            <p>{props.text}</p>
            </div>
        </div>
    ) :''
}

export default Popup