import React, { Component } from 'react'
import Menu from './menu'
import logo from '../images/logo.png'

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <img src={logo} alt="Logo"/>
        <Menu handleClick={this.props.handleClick}/>
      </div>
    )
  }
}
