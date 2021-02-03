import React from 'react'
import '../styles/Tile.css'

const Tile = (props) => {

    return (
        <div>
            <button onClick={props.func} className='tile'>{props.tile}</button>
        </div>
    )}

export default Tile

