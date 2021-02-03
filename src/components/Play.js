import useSound from 'use-sound'
import './Play.css'
import soundUrl from './sprite.mp3'

const Play = (props) => {
    
    const [play] = useSound(soundUrl, {
        sprite: {
            drake: [0, 3170],
            ewf: [3175, 8270]
        },
        volume: 0.2
    })

     return (props.audio !== false) ? (
        <button style={{background: `#0309B8`, border:`none`}} onClick={() => play({id:props.audio})}> 
            <span style={{fontSize: `100px`, background:`#0309B8`}} role="img" aria-label="play">▶️</span>
        </button>
     ) : ''
}

export default Play