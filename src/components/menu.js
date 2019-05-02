import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <div className="logo">
          <img src="" alt=""></img>
        </div>
        <div className='nav-bar'>
          <div onClick={() => this.props.handleClick("about")}>About</div>
          <div onClick={() => this.props.handleClick("experience")}>Experience</div>
          <div onClick={() => this.props.handleClick("samples")}>Work Samples</div>
          <div onClick={() => this.props.handleClick("availability")}>Availability</div>
          <div onClick={() => this.props.handleClick("contact")}>Contact Me</div>
        </div>
      </div>
    );
  }


}

export default Menu;
