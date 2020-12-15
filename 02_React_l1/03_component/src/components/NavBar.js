import React, { Component } from 'react';

class NavBar extends Component {
  render () {
    const { leftSlot, rightSlot, centerSlot } = this.props
    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">{leftSlot}</div>
        <div className="nav-item nav-center">{centerSlot}</div>
        <div className="nav-item nav-right">{rightSlot}</div>
      </div>
    );
  }
}

export default NavBar;
