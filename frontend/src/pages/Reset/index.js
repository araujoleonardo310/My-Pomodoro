/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { auth, sendPasswordResetEmail } from '../../config';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdOutlineMoreTime } from 'react-icons/md';
import AnimationLottie from '../../components/LottieFile';

import './style.css';
import { ToastContainer } from 'react-toastify';

const Reset = () => {
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;

    if (user) history.replace('/home');
  }, [user, loading]);

  return (
    <div className="container__reset">
      <ToastContainer
        position="top-center"
        autoClose={10000}
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
            <p>Recupere sua senha</p>
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
                  className="btn login" type='button'
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
