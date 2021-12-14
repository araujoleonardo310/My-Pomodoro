/* eslint-disable no-console */
import React, { useState } from 'react';
import './style.css';

import AnimationLottie from '../../components/LottieFile';

import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineMoreTime } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [GoogleIcon] = useState(FcGoogle);
  const [GithubIcon] = useState(BsGithub);
  const [FaceBookIcon] = useState(FaFacebookSquare);
  const [ClockIcon] = useState(MdOutlineMoreTime);

  return (
    <div className="container-login">
      <div className="containers">
        <div className="container-form">
          <div className="title">
            <sapn className="ClockIcon">{ClockIcon}</sapn>
            <p>Melhore sua produtividade</p>
          </div>
          <form className="form">
            <section className="inputs-wrappers">
              <div className="wrappers">
                <input type="email" className="email" />
                <input type="password" className="password" />
                <button className="btn login">Login</button>
              </div>
              <div className='Registration'>
              <a>Faça seu registro!</a>
              </div>
            </section>
            <section className="btns-socials">
              <button className="btn github">
                <span className="icon">
                  <span>{GithubIcon}</span>
                  <span>GitHub</span>
                </span>
              </button>
              <button className="btn facebook">
                <span className="icon">
                  <span>{FaceBookIcon}</span>
                  <span>Facebook</span>
                </span>
              </button>
              <button className="btn google">
                <span className="icon">
                  <span>{GoogleIcon}</span>
                  <span>Google</span>
                </span>
              </button>
            </section>
          </form>
        </div>
      </div>
      <div className="containers lottieAnimation">
        <AnimationLottie name="workTime" />
        <p></p>
      </div>
    </div>
  );
};

export default Login;
