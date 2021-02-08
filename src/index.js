import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `this state was the first to ratify the United States constitution`.toUpperCase(),
    value: '$ 200',
    selected: false,
    audio: false,
    answer: `Delaware`
  },
  {
    text: `this state's name is spanish for "full of flowers"`.toUpperCase(),
    value: '$ 400',
    selected: false,
    audio: false,
    answer: `Florida`
  },
  {
    text: `Kansas City is located in this state`.toUpperCase(),
    value: '$ 600',
    selected: false,
    audio: false,
    answer: `Missouri`
  },
  {
    text: `this state is home to America’s first public park`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false,
    answer: `Massachusetts (Boston Common)`
  },
  {
    text: `The Mason-Dixon Line makes the southern boarder of this state`.toUpperCase(),
    value: '$ 1000',
    selected: false,
    audio: false,
    answer: `Pennsylvania`
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)

