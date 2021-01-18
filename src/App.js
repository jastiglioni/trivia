import React, {useState} from 'react'
import Button from './components/Button'
import Popup from './components/Popup'
import './App.css';

const App = (props) => {
  const [tiles, setTiles] = useState(props.notes)
  const [popup, setPopup] = useState(false)

  const togglePopup = () => {
    setPopup(!popup)
    console.log(popup);
  }

  const col = {
    color: `white`,
    fontFamily: `Impact`,
    background: `#060CE9`,
    width: `300px`,
    height: `200px`,
    fontSize: `50px`,
    textAlign: `center`,
    textShadow: `4px 4px black`
  }
 
  return (
    <div display="table" className="App">
      <button style={col} onClick={() => togglePopup()}>MILITARY</button>
      {tiles.map(obj => <Button key={obj.text} tile={obj.value} />)}
      {popup ? <Popup text={`IT'S THE TYPE OF ELECTRICAL CURRENT THAT TRAVELS ONE WAY ONLY`} /> : null}
    </div>

    
  );
}

export default App;
