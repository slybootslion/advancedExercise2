import React, { Component } from 'react';
import Banner from "./Banner";
import GoodsList from "./GoodsList";

class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [1, 2, 3]
    }
  }

  render () {
    const { list } = this.state
    return (
      <div>
        main
        <Banner/>
        <GoodsList list={list} changeFun={() => this.changeProps()}/>
        {/*<GoodsList/>*/}
      </div>
    );
  }

  changeProps () {
    if (this.state.list[0] === 5) return
    this.setState({
      list: [5, 6, 7]
    })
  }
}

export default Main;
