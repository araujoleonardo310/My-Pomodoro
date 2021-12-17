/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { auth } from '../../config';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdOutlineMoreTime } from 'react-icons/md';
import AnimationLottie from '../../components/LottieFile';

import './style.css';
import { ToastContainer, toast } from 'react-toastify';

const Reset = () => {
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  // Pedindo link para criar nova senha
  const sendPasswordResetEmail = async (email, event) => {
    event.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      toast.info('Link enviado para seu email 📧💻');
      console.log('Saiu');
    } catch (error) {
      toast.error(
        'Email incorreto ou não está cadastrado em nosso sistema ⚠️😓',
      );
      console.log(error);
    }
  };

  useEffect(() => {
    if (loading) return;

    if (user) history.replace('/');
  }, [user, loading]);

  return (
    <div className="container__reset">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="section">
        <div className="form__container">
          <div className="title">
            <span className="ClockIcon">{ClockIcon}</span>
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
