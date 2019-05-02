import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'

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
        <Header handleClick={this.handleClick}/>
        <Content page={this.state.page}/>
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
