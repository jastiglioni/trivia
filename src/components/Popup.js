import React, {useState} from 'react'
import './Popup.css'
import Play from './Play'
import Answer from './Answer'
import db from '../dbConfig'

//const dbConfig = require('../dbConfig')
//const db = dbConfig.db
const firestore = db.firestore()
const docRef = firestore.collection("cities").doc("SF");
var nameTest = ''
const dataTest = docRef.get().then(doc => {
    nameTest = doc.data().name;
})



const Popup = (props) => {

    const [ansFlag, setAnsFlag] = useState(false)


    const toggleAnswer = () => {
        setAnsFlag(!ansFlag)
        console.log(ansFlag);
    }

    const test = (f) => {
        setAnsFlag(false)
        return f()
    }




    return (props.trigger) ? (
        
        
        <div className='popup'>
        <div className="buzzbar ">{nameTest}</div>
        
            <div className='popup-inner'>
                <div className='close-btn'>
                <button onClick={toggleAnswer}>Answer</button>
                <button onClick={() => test(props.func)} >X</button>
                </div>
                    <p className='text'>{props.text}</p>
                    
                    
                    <Answer flag={ansFlag} answer={props.answer} />
                    <Play audio={props.audio}/>
            </div>
        </div>
       
    ) :''
}

export default Popup