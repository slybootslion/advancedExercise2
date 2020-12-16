import React, { PureComponent } from 'react';
import { eventBus } from "./Header";

class Footer extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      msg: 'footer msg'
    }
  }


  componentDidMount () {
    eventBus.addListener('toFooter', (...args) => this.handleToFooter(...args))
  }

  componentWillUnmount () {
    eventBus.removeListener('toFooter', (...args) => this.handleToFooter(...args))
  }

  render () {
    return (
      <div>
        footer
        <p>{this.state.msg}</p>
      </div>
    );
  }

  handleToFooter (...msg) {
    this.setState({ msg })
  }
}

export default Footer;
