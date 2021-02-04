import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Edit = (props) => {

const [tiles, setTiles] = useState('')
const [money, setMoney] = useState('')
const [qid, setQid] = useState('')   //Qid = Question ID
const [question, setQuestion] = useState('')

const hook = () => {
    axios
        .get('http://localhost:3001/notes')
        .then (res => {
        setTiles(res.data)
        }) 
  }

  useEffect(hook, [])

const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
      });
    
}



const handleSelect = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    setQid(event.target.value)
}

const handleSubmit = () => {  //ONLY WORKS WITH 1

    const url = `http://localhost:3001/notes/${qid}`
    const tile = tiles.find(n => n.id === qid)
    console.log(tile);
    const changedNote = { ...tile, value: money, text: question }
    axios.put(url, changedNote).then(response => {
    setTiles(tiles.map(q => q.id !== qid ? q : response.data))  //response.data is changedNote
    })
    
}

    return (
        <div>
            <form>
                <select value={qid} onChange={handleSelect}>
                    <option value="">--Please choose an option--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
                <br/>
                <label>Tile Value 
                    <input 
                    name="value"
                    type="text" value={money} onChange={handleChange}/>
            </label>
            <br/>
            <label>Question 
                    <input 
                    name="question"
                    type="text" value={question} onChange={handleChange}/>   
            </label>
            <br/>
            <button type="submit" onClick={handleSubmit}>save</button>
            </form>

            
            {console.log(tiles)}
        </div>
    )
}

export default Edit