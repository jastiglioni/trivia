import React from 'react'

export default function Picture(props) {
    return (props.picture === true) ? (
        <div>
            <img src="ll.png" alt="a test"/>
        </div>
    ) : ""
}

