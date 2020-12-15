import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from "./components/LifeCycle";
import Component1 from "./components/Component1";

ReactDOM.render((
  <div>
    <LifeCycle />
    <p> ---- </p>
    <Component1 />
  </div>
), document.getElementById('root'));
