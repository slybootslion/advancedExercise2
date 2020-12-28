import React from './react/react';
import ReactDOM from './react/react-dom.js';

const element = (
  <div className="title" style={{ color: 'red', backgroundColor: 'yellow' }}>
    <span>hello</span> react
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
