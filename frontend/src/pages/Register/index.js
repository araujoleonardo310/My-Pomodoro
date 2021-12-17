/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../config';

import { Link, useHistory } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';

import { toast, ToastContainer } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMoreTime } from 'react-icons/md';
import AnimationLottie from '../../components/LottieFile';

import './style.css';

const Register = () => {
  const [GoogleIcon] = useState(FcGoogle);
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const SendRegistration = (event) => {
    event.preventDefault();
    if (name != '' && email != '' && password != '') {
      toast.success('Registro criado!!! 😍🎊');
      registerWithEmailAndPassword(name, email, password);
    } else {
      toast.error('Precisa preencher o formulário... 👀✍️');
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      history.replace('/home');
    }
  }, [user, loading]);

  return (
    <div className="container__register">
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
            <p>Crie conta</p>
          </div>
          <form className="form">
            <div className="inputs">
              <div className="typingData__container">
                <input
                  value={name}
                  type="text"
                  className="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                />
                <input
                  value={email}
                  autoComplete="username"
                  type="email"
                  className="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="@email.com"
                />
                <input
                  autoComplete="current-password"
                  value={password}
                  type="password"
                  className="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Crie uma senha"
                />
                <button className="btn login" onClick={SendRegistration} type='button'>
                  Registrar
                </button>
              </div>
              <div className="RegistrationAndGetpassword">
                <Link to="/">Entrar com minha conta!</Link>
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
    </div>
  );
};

export default Register;
