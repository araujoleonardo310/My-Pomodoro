import React from 'react';

import {MdTimer} from "react-icons/md"

import "./style.css"
import LottieFile from '../../components/LottieFile';


const Login = () => {
  return (
    <div className="container-login">
      <div className="container-animation">
        <LottieFile name="workTime"/>
      </div>
      <div className="container-social">
        <div className="title">
          <p><MdTimer /></p>
          <h2>Melhore sua produtividade</h2>
        </div>
        <form>
          <input type="text" />
          <input type="password" />
          <button>Login</button>
          <p>OU</p>
          <button>GitHub</button>
          <button>Facebook</button>
          <button>Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
