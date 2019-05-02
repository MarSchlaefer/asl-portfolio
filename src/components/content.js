import React, { Component } from 'react';
import About from './about'
import Experience from './experience'
import Samples from './samples'
import Availability from './availability'
import Contact from './contact'


class Content extends Component {
  render() {
    return (
      <div className="content">
        {this.renderContent()}
      </div>
    );
  }

  renderContent = () => {
    if (this.props.page === "about") {
      return <About />
    }
    if (this.props.page === "experience") {
      return <Experience />
    }
    if (this.props.page === "samples") {
      return <Samples />
    }
    if (this.props.page === "availability") {
      return <Availability />
    }
    if (this.props.page === "contact") {
      return <Contact />
    }
  }
}

export default Content;
