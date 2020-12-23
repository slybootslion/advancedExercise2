import React, { PureComponent } from 'react';
import { Button } from "antd";

class CountClass extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render () {
    const { count } = this.state
    return (
      <>
        <h2 className='content'>{count}</h2>
        <Button className='btn'
                onClick={() => this.setState({ count: this.state.count + 1 })}>+1</Button>
        <Button className='btn'
                onClick={() => this.setState({ count: this.state.count - 1 })}>-1</Button>
      </>
    );
  }
}

export default CountClass;
