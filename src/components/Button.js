import React from 'react'

const Button = ({tile}) => {
    const square = {
        background: `#060CE9`,
        width: `300px`,
        height: `200px`,
        color: `#E6C200`,
        fontSize: `100px`,
        fontFamily: `Impact`,
        textAlign: `center`,
        textShadow: `4px 4px black`
      }

    return (
        <div>
            <button style={square}>{tile}</button>
        </div>
    )}

export default Button

