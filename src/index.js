import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: `this country has 7 of the 10 largest shipping ports in the world`.toUpperCase(),
    value: '$ 200',
    selected: false,
    audio: false,
    answer: `China`
  },
  {
    text: `this city-state resides on the south eastern coast of france`.toUpperCase(),
    value: '$ 400',
    selected: false,
    audio: false,
    answer: `Monaco`
  },
  {
    text: `the united states dropped nuclear bombs on Hiroshima and this city`.toUpperCase(),
    value: '$ 600',
    selected: false,
    audio: false,
    answer: `Nagasaki`
  },
  {
    text: `khmer is the offical language of this country`.toUpperCase(),
    value: '$ 800',
    selected: false,
    audio: false,
    answer: `Cambodia`
  },
  {
    text: `This country uses the currency code "NOK" to demarcate their currency`.toUpperCase(),
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

