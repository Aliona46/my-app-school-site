import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './MyApp/MyApp';

import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <MyApp />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);