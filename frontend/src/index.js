import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import 'react-toastify/dist/ReactToastify.css';
import SettingsContextProvider from './context';
import Routes from './routes';

ReactDOM.render(
  <SettingsContextProvider>
    <Routes />
  </SettingsContextProvider>,
  document.getElementById('root'),
);
