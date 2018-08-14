import React, { Component } from "react";
import {hot} from "react-hot-loader";
// import { Switch, Route, Link } from 'react-router-dom'
// import "./stylesheets/App.css";

import Header from './Header'
import Main from './Main'

// import HomeContainer from './HomeContainer';
// import CalculatorContainer from './CalculatorContainer';


class App extends Component{
  render(){
    return(
	    <div>
		    <Header />
		    <Main />
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