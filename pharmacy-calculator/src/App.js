import React, { Component } from "react";
import {hot} from "react-hot-loader";
// import { Switch, Route, Link } from 'react-router-dom'
import "./stylesheets/App.css";

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

// import HomeContainer from './HomeContainer';
// import CalculatorContainer from './CalculatorContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
// fab adds all brand icons
import { fab } from '@fortawesome/free-brands-svg-icons'
// need to select individually which solid svg icons
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

class App extends Component{
  render(){
    return(
	    <div id='container'>
		    <Header id='header'/>
		    <Main id='main'/>
		    <Footer id='footer'/>
		</div>
    );
  }
}

// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )

// export default App


export default hot(module)(App);