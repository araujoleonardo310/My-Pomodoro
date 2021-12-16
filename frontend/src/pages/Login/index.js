/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth, signInWithGoogle } from '../../config';
import { useAuthState } from 'react-firebase-hooks/auth';

import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMoreTime } from 'react-icons/md';
import AnimationLottie from '../../components/LottieFile';

import './style.css';

const Login = () => {
  const [GoogleIcon] = useState(FcGoogle);

  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  // Fazer login

  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      toast.success('Bem-vindo(a) 💓⏰');
    } catch (error) {
      toast.error('Algo está icorreto...👀');
      console.log(error);
    }

    console.log(email, password);
    console.log(user);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      return history.replace('/home');
    }
  }, [user, loading]);

  return (
    <div className="container__login">
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
            <p>Melhore sua produtividade</p>
          </div>
          <form className="form">
            <div className="inputs">
              <div className="typingData__container">
                <input
                  value={email}
                  type="email"
                  className="email"
                  autoComplete="username"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="@email.com"
                />
                <input
                  autoComplete="current-password"
                  value={password}
                  type="password"
                  className="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                />
                <button className="btn" onClick={() => signIn(email, password)}>
                  Login
                </button>
              </div>
              <div className="RegistrationAndGetpassword">
                <Link to="/register">Crie sua conta!</Link>
                <Link to="/reset">Esqueceu a senha?</Link>
              </div>
            </div>
            <div className="btns-socials">
              <button type="submit" className="btn" onClick={signInWithGoogle}>
                <span>{GoogleIcon} Google</span>
              </button>
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

export default Login;
