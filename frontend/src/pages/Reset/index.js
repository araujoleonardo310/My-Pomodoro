import React, { useEffect, useState } from 'react';
import { auth, sendPasswordResetEmail } from '../../config/Firebase';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { MdOutlineMoreTime } from 'react-icons/md';
import AnimationLottie from '../../components/LottieFile';


import './style.css';

const Reset = () => {
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;

    if (user) history.replace('/');
  }, [user, loading]);

  return (
    <div className="container__reset">
      <div className="section">
        <div className="form__container">
          <div className="title">
            <sapn className="ClockIcon">{ClockIcon}</sapn>
            <p>Recupere sua conta</p>
          </div>
          <form className="form">
            <div className="inputs">
              <div className="typingData__container">
                <input
                  value={email}
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
