import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1>Bronwyn Schlaefer</h1>
          <p>ASL Interpreting Portfolio</p>
        </div>
        <div className='nav-bar'>
          <span>About</span>
          <span>Experience</span>
          <span>Work Samples</span>
          <span>Availablility</span>
          <span>Contact Me</span>
        </div>
      </div>
    );
  }
}

export default Header;
