import React from 'react'
import './stylesheets/HomeContainer.css';

import pillsBg from './asset/pillsBg.jpg';
import { Button } from 'react-bootstrap/lib';

const HomeContainer = () => (
  <div>
    <h1>Welcome to Pharmacy Paradise!</h1>
    <img src={pillsBg} alt="bg" className="bg" />
    <button className={'btn btn-lg btn-danger'}>This is a button!</button>
  </div>
)

export default HomeContainer
