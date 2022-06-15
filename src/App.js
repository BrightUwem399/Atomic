import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className='first-section'>
          <Navbar />
          <div className='second-section'><Section /></div>
          <div className='third-section'><Footer /></div>
        </div>
      </div>
    );
  }
}

export default App;