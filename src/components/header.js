import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1>BRONWYN SCHLAEFER</h1>
          <p>ASL Interpreting Portfolio</p>
        </div>
        <div className='nav-bar'>
          <span onClick={() => this.props.handleClick("about")}>About</span>
          <span onClick={() => this.props.handleClick("experience")}>Experience</span>
          <span onClick={() => this.props.handleClick("samples")}>Work Samples</span>
          <span onClick={() => this.props.handleClick("availability")}>Availability</span>
          <span onClick={() => this.props.handleClick("contact")}>Contact Me</span>
        </div>
      </div>
    );
  }


}

export default Header;
