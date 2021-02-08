import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `this state was the first to ratify the United States constitution`.toUpperCase(),
    value: '$ 200',
    selected: false,
    audio: false,
  },
  {
    text: `Mount Rushmore is located in this state`.toUpperCase(),
    value: '$ 400',
    selected: false,
    audio: false
  },
  {
    text: `The capital of this state is Helena`.toUpperCase(),
    value: '$ 600',
    selected: false,
    audio: false,
  },
  {
    text: `this state is home to America’s first public park`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false
  },
  {
    text: `The Mason-Dixon Line makes the southern boarder of this state`.toUpperCase(),
    value: '$ 1000',
    selected: false,
    audio: false,
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)

