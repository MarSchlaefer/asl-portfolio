import React, { Component } from 'react'
import Menu from './menu'

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <Menu handleClick={this.props.handleClick}/>
      </div>
    )
  }
}
