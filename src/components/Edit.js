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


const EditQuestion = () => {
    const tile = tiles.map(q => q.id)
    return (
        <label>
            {tile}
        </label>
    )
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

                <EditQuestion obj={qid} />

               

                <br/>
                <br/>


            </form>
        </div>
    )
}

export default Edit