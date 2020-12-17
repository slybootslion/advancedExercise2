import React, { PureComponent } from 'react';

class App extends PureComponent {
  render () {
    return (
      <div>
        HOC
      </div>
    );
  }
}

function buff (Component, name = "NewComponent") {
  class NewComponent extends PureComponent {
    render () {
      return (
        <Component/>
      );
    }
  }

  NewComponent.displayName = name
  return NewComponent
}

const BuffComp = buff(App, 'HOCFun')

export default BuffComp;
