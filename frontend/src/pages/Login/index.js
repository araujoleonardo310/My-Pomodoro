import React from 'react';

import './style.css';
import LottieFile from '../../components/LottieFile';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMoreTime } from 'react-icons/md';

const Login = () => {
  return (
    <div className="container-login">
      <div className="containers">
        <div className="container-form">
          <div className="title">
            <MdOutlineMoreTime className="moreTime" />
            <p>Melhore sua produtividade</p>
          </div>
          <form className="form">
            <section className="inputs-wrappers">
              <div className="wrappers">
                <input type="email" className="email" />
                <input type="password" className="password" />
              </div>
              <button className="btn login">Login</button>
            </section>
            <section className="btns-socials">
              <button className="btn github">
                <span className="logo">
                  <span>
                    <BsGithub />
                  </span>
                  <span>GitHub</span>
                </span>
              </button>
              <button className="btn facebook">
                <span className="logo">
                  <span>
                    <FaFacebookSquare />
                  </span>
                  <span>Facebook</span>
                </span>
              </button>
              <button className="btn google">
                <span className="logo">
                  <span>
                    <FcGoogle />
                  </span>
                  <span>Google</span>
                </span>
              </button>
            </section>
          </form>
        </div>
      </div>
      <div className="containers lottieAnimation">
        <LottieFile name="workTime" />
        <p></p>
      </div>
    </div>
  );
};

export default Login;
