import React from 'react'
import './stylesheets/Home.css';

import pillsBg from './asset/pillsBg.jpg';
import { Button } from 'react-bootstrap/lib';

const Home = () => (
  <div>
    <h1>Welcome to Pharmacy Paradise!</h1>
    <img src={pillsBg} alt="bg" className="bg" />
    <button className={'btn btn-lg'} />
  </div>
)

export default Home
