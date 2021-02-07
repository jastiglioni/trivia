import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `Beyonce began her musical career appearing as the lead singer of this group`.toUpperCase(),
    value: '$ 200',
    selected: false,
    audio: false,
    picture: true
  },
  {
    text: 'this recording artist had an illustrious solo career after leaving N-Sync in 2002'.toUpperCase(),
    value: '$ 400',
    selected: false,
    audio: false
  },
  {
    text: 'This composition by Beethoven was published in 1867'.toUpperCase(),
    value: '$ 600',
    selected: false,
    audio: 'ewf',
  },
  {
    text: `Eminem's moniker plays off of the initials his real name`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false
  },
  {
    text: 'This critally-accliamed rendition of the National Anthem was performed by this artist'.toUpperCase(),
    value: '$ 1000',
    selected: false,
    audio: 'drake',
  }
]

ReactDOM.render(
  <App  />,
  document.getElementById('root')
)
