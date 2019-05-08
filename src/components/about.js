import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="page-title">
          <h1>About</h1>
        </div>
        <br />
        <ReactPlayer url='https://youtu.be/qmLfxEcsa0g' />
      </div>
    );
  }
}

export default About;
