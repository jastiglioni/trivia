import useSound from 'use-sound'
import './Play.css'
import soundUrl from './sutrivia.mp3'

const Play = (props) => {
    
    const [play] = useSound(soundUrl, {
        sprite: {
            dif: [0, 12000],
            trap: [12100, 4000]
        }
    })

     return (props.audio !== false) ? (
        <button style={{background: `#0309B8`, border:`none`}} onClick={() => play({id:props.audio})}> 
            <span style={{fontSize: `100px`, background:`#0309B8`}} role="img" aria-label="play">▶️</span>
        </button>
     ) : ''
}

export default Play