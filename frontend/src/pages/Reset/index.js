/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';

import { auth, sendPasswordResetEmail } from '../../config/Firebase';
import './style.css';

import AnimationLottie from '../../components/LottieFile';

import { MdOutlineMoreTime } from 'react-icons/md';

const Reset = () => {
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) history.replace('/');
  }, [user, loading]);

  return (
    <div className="container__reset">
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

                <button
                  className="btn login"
                  onClick={() => sendPasswordResetEmail(email)}
                >
                  Enviar
                </button>
              </div>
              <div className="RegistrationAndGetpassword">
                <Link to="/">Entrar na minha conta!</Link>
                <Link to="/register">Crie sua conta!</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="section lottieAnimation">
        <AnimationLottie name="workTime" />
      </div>
    </div>
  );
};

export default Reset;
