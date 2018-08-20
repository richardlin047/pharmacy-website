import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './stylesheets/Main.css'

import HomeContainer from './HomeContainer'
import About from './About'
import Schedule from './Schedule'
import CalculatorContainer from './CalculatorContainer'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main id='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/about' component={About}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/calculator' component={CalculatorContainer}/>
    </Switch>
  </main>
)

export default Main
