import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../config/Firebase';

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
