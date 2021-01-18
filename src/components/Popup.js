import React from 'react'

const Popup = ({text}) => { 
    const pop = {
        background: `#060CE9`,
        color: `white`,
        fontSize: `75px`,
        fontFamily: `Korinna`,
        textAlign: `center`,
        textShadow: `4px 4px black`,
        top: `10px`,
        botton: `25px`,
        left: `10%`,
        right: `10%`,
        height: `50%`,
        position: `fixed`,
        display: `flex`,
        alignItems: `center`
       
    }
    return (
        <div>
            <p style={pop}>{text}</p>
        </div>
    )
}

export default Popup