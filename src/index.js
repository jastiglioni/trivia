import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `Beyonce began her music career appearing as the lead singer of this group`.toUpperCase(),
    value: '$ 200',
    selected: false,
    audio: false
  },
  {
    text: 'this recording artist had an illustrious solo career after leaving N-Sync in 2002'.toUpperCase(),
    value: '$ 400',
    selected: false,
    audio: false
  },
  {
    text: 'finish the lyrics to this verse'.toUpperCase(),
    value: '$ 600',
    selected: false,
    audio: 'drake',
  },
  {
    text: `Eminem's moniker play's off of his real name`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false
  },
  
  {
    text: 'Earth, Wind, & Fire released this timeless classic in 1978'.toUpperCase(),
    value: '$ 1000',
    selected: false,
    audio: 'ewf',
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
