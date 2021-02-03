import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Edit = (props) => {

const [tiles, setTiles] = useState('')
const [text, setText] = useState('')
const [qid, setQid] = useState('')   //Qid = Question ID

useEffect(() => {
    axios
        .get('http://localhost:3001/notes')
        .then (res => {
        setTiles(res.data)
        }) 
  }, [])

const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setText(event.target.value)
}

const handleSelect = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    setQid(event.target.value)
}

const handleSubmit = (event, id) => {  //ONLY WORKS WITH 1
    event.preventDefault()
    const url = `http://localhost:3001/notes/${id}`
    const tile = tiles.find(n => n.id === id)
    const changedNote = { ...tile, value: text }
    axios.put(url, changedNote).then(response => {
    setTiles(tiles.map(q => q.id !== id ? q : response.data))  //response.data is changedNote
    })
}

    return (
        <div>
            <form onSubmit={() => handleSubmit(qid)}>
                <select value={qid} onChange={handleSelect}>
                    <option value="">--Please choose an option--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
                <label>Data: 
                    <input type="text" value={text} onChange={handleChange}/>
                    <button type="submit">save</button>
                </label>
            </form>
        </div>
    )
}

export default Edit