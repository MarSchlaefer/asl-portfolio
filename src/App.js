import React, { Component } from 'react';
import './App.css';
import Content from './components/content'
import SideBar from './components/sideBar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideBar handleClick={this.handleClick}/>
        <div className="spacing"></div>
        <Content page={this.state.page}/>
      </div>
    );
  }
}

export default App;
