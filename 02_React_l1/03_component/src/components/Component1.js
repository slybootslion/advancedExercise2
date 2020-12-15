import React, { Component } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Component1 extends Component {
  render () {
    return (
      <div>
        <h2>Component nesting & data transfer</h2>
        <div>component1</div>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Component1;
