import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import 'react-toastify/dist/ReactToastify.css';

import SettingsContextProvider from './context';

import './style/global.css';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root'),
);
