import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="page-title" id="test">
          <h1>About</h1>
        </div>
        <br />
        <ReactPlayer url='https://youtu.be/qmLfxEcsa0g' />
      </div>
    );
  }
}

export default About;
