import React, {useState, useEffect} from 'react'
import Tile from './components/Tile'
import Popup from './components/Popup'
import Edit from './components/Edit'
import './App.css';
import axios from 'axios';

const App = () => {
  const [tiles, setTiles] = useState([])
  const [popup, setPopup] = useState(false)
  const [qText, setQText] = useState('')
  const [audio, setAudio] = useState(false)
  
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then (res => {
        setTiles(res.data)
      })
  }, [])

  const setQuestion = (tile) => {
    setQText(tile.text.toUpperCase())
    setAudio(tile.audio)
    tile.value = ''
    togglePopup()
  }

  const togglePopup = () => {
    setPopup(!popup)
  }



  return (
    <div className="App">
      <button className="col">MUSIC</button>
      {tiles.map(obj => <Tile func={() => setQuestion(obj)}key={obj.text} tile={obj.value} />)}
      <Popup func={() => togglePopup()} trigger={popup} text={qText} audio={audio} />
      <br/><br/>
      <Edit />
    </div>

    
  )
}

export default App;
