import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from "./components/LifeCycle";
import Component1 from "./components/Component1";
import App from "./components/App";

ReactDOM.render((
  <div>
    <LifeCycle/>
    <p> ---- </p>
    <Component1/>
    <p> ---- </p>
    <App/>
  </div>
), document.getElementById('root'));
