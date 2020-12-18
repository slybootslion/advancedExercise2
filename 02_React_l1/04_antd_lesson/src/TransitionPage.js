import React, { PureComponent } from 'react';
import CssTransitionComp from "./transition/CSSTransitionComp";
import SwitchTransitionComp from "./transition/SwitchTransitionComp";
import TransitionGroupComp from "./transition/TransitionGroupComp";

class TransitionPage extends PureComponent {
  render () {
    return (
      <div>
        <CssTransitionComp/>
        <SwitchTransitionComp/>
        <TransitionGroupComp/>
      </div>
    );
  }
}

export default TransitionPage;
