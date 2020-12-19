import React, { PureComponent } from 'react';
import { Button } from "antd";

import store from '@/store'
import { subAction } from "@/store/actions";

class About extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount () {
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }

  componentWillUnmount () {
    this.unsubscribue()
  }

  render () {
    return (
      <>
        <h2>about count: {this.state.count}</h2>
        <Button className={'btn'} onClick={() => this.sub(1)}>-1</Button>
        <Button className={'btn'} onClick={() => this.sub(5)}>-5</Button>
      </>
    );
  }

  sub (num) {
    store.dispatch(subAction(num))
  }
}

export default About;
