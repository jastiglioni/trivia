import React, {useState, useEffect} from 'react'

import Edit from './components/Edit'
import './styles/App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom';
import Game from './components/Game'
import {Link} from 'react-router-dom'

const App = () => {


  const padding = {
    padding: '5px'
  }

  return (
    <div className="App">
      <div>

        <Router>
        <Link style={padding} to="/">HOME</Link>
        
          <Link style={padding} to="/edit">EDIT</Link>
          

          <Switch>
            <Route path='/edit' component={Edit} />
            <Route path='/' component={Game} />
          </Switch>

        </Router>
      </div>
    </div>    
  )
}

export default App;
