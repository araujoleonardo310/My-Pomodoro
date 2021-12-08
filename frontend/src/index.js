import React from 'react';
import ReactDOM from 'react-dom';

import './style/global.css';
import 'react-toastify/dist/ReactToastify.css';

import SettingsContextProvider from './context';
import Home from './pages/Home';

ReactDOM.render(
  <SettingsContextProvider>
    <Home />
  </SettingsContextProvider>,
  document.getElementById('root'),
);
