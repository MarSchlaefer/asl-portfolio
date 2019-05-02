import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer'
import Content from './components/content'
import SideBar from './components/sideBar'

class App extends Component {

  constructor() {
    super()
    this.state = {
      page: "about"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <SideBar handleClick={this.handleClick}/>
          <Content page={this.state.page}/>
        </div>
          <Footer />
      </div>
    );
  }

  handleClick = (pageClick) => {
    if (pageClick === "about") {
      return this.setState({
        page: "about"
      })
    } else if (pageClick === "experience") {
      return this.setState({
        page: "experience"
      })
    } else if (pageClick === "samples") {
      return this.setState({
        page: "samples"
      })
    } else if (pageClick === "availability") {
      return this.setState({
        page: "availability"
      })
    } else if (pageClick === "contact") {
      return this.setState({
        page: "contact"
      })
    }
  }
}

export default App;
