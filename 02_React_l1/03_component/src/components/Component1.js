import React, { Component, createContext } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export const UserContext = createContext({
  bannerData: [1, 2, 3],
  count: 0
})

class Component1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bannerData: [5, 6, 7],
      count: 0
    }
  }


  render () {
    return (
      <div>
        <h2>Component nesting & data transfer</h2>
        <div>component1</div>
        <div>
          <Header/>
          <UserContext.Provider value={this.state}>
            <Main/>
          </UserContext.Provider>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Component1;
