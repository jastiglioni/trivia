import React, {useState, useEffect} from 'react'
import axios from 'axios'
//import myData from '../../db.json'

const Edit = (props) => {

const [data, setData] = useState('')
const [text, setText] = useState('')

useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then (res => {
        setData(res.data)
        //console.log(res.data[0])
      })
      
  }, [])

const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setText(event.target.value)
}

const handleSubmit = (id) => {
    //event.preventDefault()
    // setData(text)

  const url = `http://localhost:3001/notes/${id}`
  const note = data.find(n => n.id === id)
  const changedNote = { ...note, text: text }
  console.log(`something ${changedNote}`);
  axios.put(url, changedNote).then(response => {
    setData(data.map(note => note.id !== id ? note : response.data))
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
            <button onClick={() => handleSubmit(1)}>test</button>
        </div>
    )
}

export default Edit

//enter rfc for component template