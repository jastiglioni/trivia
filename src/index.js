import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `this singer-songwriter is spotify's most streamed artist`.toUpperCase(),
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
    audio: 'trap',
  },
  {
    text: `the final iteration of Destiny's Child was composed of Beyonce Knowles, Michelle Williams, and this artist`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false
  },
  
  {
    text: 'R&B Artist Genuwine released this timeless R&B record in 2001'.toUpperCase(),
    value: '$ 1000',
    selected: false,
    audio: 'dif',
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
