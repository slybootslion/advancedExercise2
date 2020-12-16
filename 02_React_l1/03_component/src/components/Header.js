import React, { PureComponent } from 'react';
import { EventEmitter } from 'events'

export const eventBus = new EventEmitter()

class Header extends PureComponent {
  render () {
    return (
      <div>
        <button onClick={() => this.toFooter()}>msg to footer</button>
      </div>
    );
  }

  toFooter () {
    eventBus.emit('toFooter', 'header trigger msg')
  }
}

export default Header;
