import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <div className="logo">
          <img src="" alt=""></img>
        </div>
        <div className='nav-bar'>
          <AnchorLink href='#about'>
            <div>About</div>
          </AnchorLink>
          <AnchorLink href='#experience'>
            <div>Experience</div>
          </AnchorLink>
          <AnchorLink href='#samples'>
            <div>Work Samples</div>
          </AnchorLink>
          <AnchorLink href='#availability'>
            <div>Availability</div>
          </AnchorLink>
          <AnchorLink href='#contact'>
            <div>Contact Me</div>
          </AnchorLink>
        </div>
      </div>
    );
  }


}

export default Menu;
