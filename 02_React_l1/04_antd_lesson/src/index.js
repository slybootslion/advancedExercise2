import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'antd/dist/antd.css'
import 'antd/dist/antd.less'
import AxiosPage from "./AxiosPage";
import TransitionPage from "./TransitionPage";

ReactDOM.render(
  <>
    <p>---ant design---</p>
    <App/>
    <p>---axios---</p>
    <AxiosPage/>
    <p>---transition---</p>
    <TransitionPage/>
  </>,
  document.getElementById('root')
);
