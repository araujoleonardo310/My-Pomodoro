/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../config/Firebase';
import { toast } from 'react-toastify';

import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMoreTime } from 'react-icons/md';
import AnimationLottie from '../../components/LottieFile';

import './style.css';
import AlertsToast from '../../components/AlertsToast';

const Register = () => {
  const [GoogleIcon] = useState(FcGoogle);
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
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
      <div className="section">
        <div className="form__container">
          <div className="title">
            <sapn className="ClockIcon">{ClockIcon}</sapn>
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
                  type="email"
                  className="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="@email.com"
                />
                <input
                  value={password}
                  type="password"
                  className="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Crie uma senha"
                />
                <button className="btn login" onClick={SendRegistration}>
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
                <pan>{GoogleIcon} Google</pan>
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

export default Register;
