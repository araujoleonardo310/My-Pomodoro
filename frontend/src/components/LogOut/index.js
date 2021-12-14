import React from 'react';

import { logout } from '../../config/Firebase';

const LogOut = () => {
  return (
    <>
      <button onClick={logout} className="logout">
        Sair
      </button>
    </>
  );
};

export default LogOut;
