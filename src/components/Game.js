import React, {useState, useEffect} from 'react'
import Tile from './Tile'
import Popup from './Popup'
import axios from 'axios';

const Game = () => {

  const [tiles, setTiles] = useState([])
  const [popup, setPopup] = useState(false)
  const [question, setQuestion] = useState('')
  const [audio, setAudio] = useState(false)
  
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then (response => {
        setTiles(response.data)
      })
  }, [])

  const setActiveQuestion = (tile) => {
    setQuestion(tile.text.toUpperCase())
    setAudio(tile.audio)
    tile.value = ''
    togglePopup()
  }

  const togglePopup = () => {
    setPopup(!popup)
  }
  
    return (
        <div>
        <button className="col">MUSIC</button>
        {tiles.map(obj => <Tile func={() => setActiveQuestion(obj)}key={obj.id} tile={obj.value} />)}
            <Popup func={() => togglePopup()} trigger={popup} text={question} audio={audio} />
        </div>
    )
}

export default Game
