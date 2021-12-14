import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import App from './app';

import SettingsContextProvider from './context';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root'),
);
