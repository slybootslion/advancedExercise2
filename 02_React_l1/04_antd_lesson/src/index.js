import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'antd/dist/antd.css'
import 'antd/dist/antd.less'
import AxiosPage from "./AxiosPage";

ReactDOM.render(
  <React.StrictMode>
    <p>---ant design---</p>
    <App/>
    <p>---axios---</p>
    <AxiosPage />
  </React.StrictMode>,
  document.getElementById('root')
);
