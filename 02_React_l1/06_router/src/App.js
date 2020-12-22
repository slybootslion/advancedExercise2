import React, { PureComponent } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";

import './index.scss'

class App extends PureComponent {
  render () {
    return (
      <>
        <BrowserRouter>
          <Link className="link-item" to="/">首页</Link>
          <Link className="link-item" to="/about">关于</Link>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
