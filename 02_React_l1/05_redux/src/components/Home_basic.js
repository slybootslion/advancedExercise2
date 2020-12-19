import React, { PureComponent } from 'react';
import { Button } from "antd";

import store from '@/store'
import { addAction } from "@/store/actions";

class Home extends PureComponent {
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
        <h2>home count: {this.state.count}</h2>
        <Button className={'btn'} onClick={() => this.add(1)}>+1</Button>
        <Button className={'btn'} onClick={() => this.add(5)}>+5</Button>
      </>
    );
  }

  add (num) {
    store.dispatch(addAction(num))
  }
}

export default Home;
