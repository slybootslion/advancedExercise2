import React, { Component } from 'react';

class RemoveComp extends Component {
  componentWillUnmount () {
    console.log("removeComp's component will unmount")
  }

  render () {
    return (<div>remove-comp组件</div>)
  }
}

class LifeCycle extends Component {
  constructor (props) {
    super(props);
    console.log('constructor')

    this.state = {
      count: 0,
      isShow: true
    }
  }

  componentDidMount () {
    console.log('component did mount')
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('component did update')
  }

  render () {
    console.log('render')
    const { isShow } = this.state
    return (
      <div>
        <h2>LifeCycle</h2>
        <p>{this.state.count}</p>
        <button onClick={() => this.add()}>+1</button>
        <div>
          <button onClick={() => this.toggleCompShow()}>切换组件显隐</button>
          {isShow && <RemoveComp/>}
        </div>
      </div>
    );
  }

  add () {
    let { count } = this.state
    this.setState({
      count: ++count
    })
  }

  toggleCompShow () {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

export default LifeCycle;
