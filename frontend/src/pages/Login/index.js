/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../config/Firebase';

import AnimationLottie from '../../components/LottieFile';

import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineMoreTime } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import AlertsToast from '../../components/AlertsToast';

import './style.css';

const Login = () => {
  const [GoogleIcon] = useState(FcGoogle);
  const [GithubIcon] = useState(BsGithub);
  const [FaceBookIcon] = useState(FaFacebookSquare);
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) history.replace('/home');
    
  }, [user, loading]);

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
                <input
                  type="email"
                  className="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="@email.com"
                />
                <input
                  type="password"
                  className="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                />
                <button
                  className="btn login"
                  onClick={() => signInWithEmailAndPassword(email, password)}
                >
                  Login
                </button>
              </div>
              <div className="RegistrationAndGetpassword">
                <Link to="/register">Crie sua conta!</Link>
                <Link to="/reset">Esqueceu a senha?</Link>
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
              <button className="btn google" onClick={signInWithGoogle}>
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
      </div>
      <AlertsToast />
    </div>
  );
};

export default Login;
