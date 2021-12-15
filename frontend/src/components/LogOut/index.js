import React from 'react';

import { LogOutPomodoro } from '../../config/Firebase';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
  const history = useHistory();
  const LogOutSystem = () => {
    LogOutPomodoro;
    history.replace('/');
  };
  return (
    <>
      <button onClick={LogOutSystem} className="logout">
        Sair
      </button>
    </>
  );
};

export default LogOut;
