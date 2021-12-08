import React from 'react';
import LottieFile from '../../components/LottieFile';
import "./style.css"
import {MdTimer} from "react-icons/md"


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
