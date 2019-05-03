import React, { Component } from 'react';
import About from './about'
import Experience from './experience'
import Samples from './samples'
import Availability from './availability'
import Contact from './contact'
import ReallySmoothScroll from 'really-smooth-scroll'

ReallySmoothScroll.shim();

class Content extends Component {
  render() {
    return (
      <div className="content">
        <About />
        <Experience />
        <Samples />
        <Availability />
        <Contact />
      </div>
    );
  }

 
}

export default Content;
