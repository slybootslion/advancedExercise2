import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from "./components/LifeCycle";
import Component1 from "./components/Component1";
import App from "./components/App";
import Componnet2 from "./components/Componnet2";
import RefComponet from "./components/RefComponet";

ReactDOM.render((
  <div>
    <LifeCycle/>
    <p> ---- </p>
    <Component1/>
    <p> ---- </p>
    <App/>
    <p> ---- </p>
    <Componnet2/>
    <p> ---- </p>
    <RefComponet/>
  </div>
), document.getElementById('root'));
