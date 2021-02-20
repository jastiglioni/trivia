import React, {useState} from 'react'
import Tile from './components/Tile'
import Popup from './components/Popup'
import './App.css';



const App = (props) => {
  const [tiles] = useState(props.notes)
  const [popup, setPopup] = useState(false)
  const [q2, setq2] = useState('')
  const [audio, setAudio] = useState(false)
  const [answer, setAnswer] = useState(props.answer)

  const setQuestion = (tile) => {
    setq2(tile.text)
    setAudio(tile.audio)
    tile.value = ''
    togglePopup()
    setAnswer(tile.answer)
  }

  const togglePopup = () => {
    setPopup(!popup)
   
  }

  
  const col = {
    color: `white`,
    fontFamily: `Impact`,
    background: `#060CE9`,
    width: `300px`,
    height: `200px`,
    fontSize: `50px`,
    textAlign: `center`,
    textShadow: `4px 4px 0.075em black`,
    border: `none`
  }
 
  return (
    <div className="App">
      <button style={col}>CITIES & COUNTRIES</button>
      {tiles.map(obj => <Tile func={() => setQuestion(obj)} key={obj.text} tile={obj.value} />)}
        <Popup func={() => togglePopup()} answer={answer} trigger={popup} text={q2} audio={audio} />
    </div>

    
  );
}

export default App;
