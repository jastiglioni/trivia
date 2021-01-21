import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    text: 'A dish of prepared vinegared rice accompanying a variety of ingredients, especially raw fish',
    value: '$ 200',
    selected: false
  },
  {
    text: 'A form of wrestling where a wrestler attempts to force his opponent out of a circular ring or into touching the ground with any body part other than the soles of his feet',
    value: '$ 400',
    selected: false
  },
  {
    text: 'comics or graphic novels originating from Japan',
    value: '$ 600',
    selected: false
  },
  {
    text: 'a concept referring to business activities that continuously improve all functions and involve all employees',
    value: '$ 800',
    selected: false
  },
  {
    text: 'the title of the military dictators of Japan during most of the period spanning from 1185 to 1868',
    value: '$ 1000',
    selected: false
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
