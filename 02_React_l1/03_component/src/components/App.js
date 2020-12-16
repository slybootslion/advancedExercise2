import React, { Component } from 'react';
import TabControl from "./TabControl";
import NavBar from "./NavBar";
import './style.scss'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ['tab1', 'tab2', 'tab3'],
      currentIndex: 0,
    }
    this.contentTxt = {
      0: 'content 1',
      1: 'content 2',
      2: 'content 3',
    }
  }

  render () {
    const { title, currentIndex } = this.state
    return (
      <div>
        <TabControl titles={title} itemClick={idx => this.itemClick(idx)}/>
        <h2>{this.contentTxt[currentIndex]}</h2>

        <NavBar leftSlot={<div>a</div>}
                centerSlot={<span>b</span>}
                rightSlot={<span>c</span>}/>
      </div>
    );
  }

  itemClick (currentIndex) {
    this.setState({
      currentIndex
    })
  }
}

export default App;
