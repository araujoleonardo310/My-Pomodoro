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
    <div className="container__login">
      <div className="section">
        <div className="form__container">
          <div className="title">
            <sapn className="ClockIcon">{ClockIcon}</sapn>
            <p>Melhore sua produtividade</p>
          </div>
          <form className="form">
            <div className="inputs">
              <div className="typingData__container">
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
            </div>
            <div className="btns-socials">
              <button className="btn" onClick={signInWithGoogle}>
                <span>{GoogleIcon} Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="section lottieAnimation">
        <AnimationLottie name="workTime" />
      </div>
      <AlertsToast />
    </div>
  );
};

export default Login;
