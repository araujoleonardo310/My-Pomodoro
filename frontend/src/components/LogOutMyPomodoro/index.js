import React from 'react';
import { LogOut } from '../../config/Firebase';
import {useHistory} from "react-router-dom"

const LogOutMyPomodo = () => {

  const history = useHistory()
  const LogOutSystem = () => {
  };

  useEffect(() => {
    LogOut;
    history.replace("/")
  }, [onClick])

  return (
    <>
      <button onClick={LogOutSystem} className="logout">
        Sair
      </button>
    </>
  );
};

export default LogOutMyPomodo;
