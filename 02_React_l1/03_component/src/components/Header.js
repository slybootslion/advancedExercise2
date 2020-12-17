import React, { PureComponent, Fragment } from 'react';
import { EventEmitter } from 'events'

export const eventBus = new EventEmitter()

class Header extends PureComponent {
  render () {
    return (
      <Fragment>
        <button onClick={() => this.toFooter()}>use events trigger msg to footer</button>
      </Fragment>
    );
  }

  toFooter () {
    eventBus.emit('toFooter', 'header trigger msg')
  }
}

export default Header;
