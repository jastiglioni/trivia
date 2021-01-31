import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Edit = (props) => {

const [tiles, setTiles] = useState('')
const [text, setText] = useState('')

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

const handleSubmit = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const tile = tiles.find(n => n.id === id)
    const changedNote = { ...tile, text: text }
    axios.put(url, changedNote).then(response => {
    setTiles(tiles.map(q => q.id !== id ? q : response.data))  //response.data is changedNote
    })
}

    return (
        <div>
            <form onSubmit={() => handleSubmit(1)}>
                <label>Data: 
                    <input type="text" value={text} onChange={handleChange}/>
                    <button type="submit">save</button>
                </label>
            </form>
        </div>
    )
}

export default Edit