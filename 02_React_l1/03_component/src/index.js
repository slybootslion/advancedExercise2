import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from "./components/LifeCycle";
import Component1 from "./components/Component1";
import App from "./components/App";
import Componnet2 from "./components/Componnet2";
import RefComponet from "./components/RefComponet";
import FormComp from "./components/FormComp";
import BuffComp from "./components/HOC";
import Portals from "./components/Portals";

ReactDOM.render((
  <React.StrictMode>
    <Fragment>
      <LifeCycle/>
      <p> ---- </p>
      <Component1/>
      <p> ---- </p>
      <App/>
      <p> ---- </p>
      <Componnet2/>
      <p> ---- </p>
      <RefComponet/>
      <p> ---- </p>
      <FormComp/>
      <p> --HOC-- </p>
      <BuffComp/>
      <p> --portals-- </p>
      <Portals/>
    </Fragment>
  </React.StrictMode>
), document.getElementById('root'));
