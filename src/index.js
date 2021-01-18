import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: 'This is the question',
    value: '$ 200'
  },
  {
    text: 'What is the best',
    value: '$ 400'
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
