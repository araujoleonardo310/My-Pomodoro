import React from 'react';

import { logout } from '../../config/Firebase';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
  const history = useHistory();
  const LogOutSystem = () => {
    logout;
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
