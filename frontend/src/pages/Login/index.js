import React from 'react';

import './style.css';
import LottieFile from '../../components/LottieFile';

const Login = () => {
  return (
    <div className="container-login">
      <div className="container-animation">
        {/* <LottieFile name="workTime" /> */}
      </div>
      <div className="container-form">
        <div className="title">
          <h2>Melhore sua produtividade</h2>
        </div>
        <form className="form">
          <section className='inputs-wrappers'>
            <div className='wrappers'>
              <input type="text" />
              <input type="password" />
            </div>
            <button className='btn login'>Login</button>
          </section>
          <section className='btns-socials'>
            <button className='btn github'>GitHub</button>
            <button className='btn facebook'>Facebook</button>
            <button className='btn google'>Google</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Login;
