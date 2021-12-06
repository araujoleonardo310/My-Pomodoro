import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import App from './App';
import SettingsContextProvider from './context/SettingsContext';


ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
);


