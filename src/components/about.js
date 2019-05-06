import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="page-title">
          <h1>ABOUT</h1>
        </div>
        <h5>“It all started when Brian walked into the wrong classroom and it changed his life forever.&nbsp; Brian compares it to the a secret passage way of pure fate.”</h5>
        <p>On that day Brian began a journey that is still continuing today as a sign language interpreter.&nbsp; He enjoys knowing that as an interpreter two people are able to make a connection and learn from each other.</p>
        <br />
        <ReactPlayer url='https://youtu.be/qmLfxEcsa0g' />
      </div>
    );
  }
}

export default About;
