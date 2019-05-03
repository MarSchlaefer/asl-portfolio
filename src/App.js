import React, { Component } from 'react';
import './App.css';
import Content from './components/content'
import SideBar from './components/sideBar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="spacing"></div>
        <Content />
      </div>
    );
  }
}

export default App;
