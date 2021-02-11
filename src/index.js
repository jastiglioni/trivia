import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `the largest shipping port in the world is located in this city`.toUpperCase(),
    value: '$ 200',
    selected: false,
    audio: false,
    answer: `Shanghai`
  },
  {
    text: `this city-state resides on the french riviera`.toUpperCase(),
    value: '$ 400',
    selected: false,
    audio: false,
    answer: `Monaco`
  },
  {
    text: `this city has the largest metropolitan economy in the world`.toUpperCase(),
    value: '$ 600',
    selected: false,
    audio: false,
    answer: `Tokyo`
  },
  {
    text: `khmer is the offical language of this country`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false,
    answer: `Cambodia`
  },
  {
    text: `the currency code "NOK" is used to demarcate the currency of this country`.toUpperCase(),
    value: '$ 1000',
    selected: false,
    audio: false,
    answer: `Norway`
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)

