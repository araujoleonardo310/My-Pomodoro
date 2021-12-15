/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../config/Firebase';
import './style.css';

import AnimationLottie from '../../components/LottieFile';

import { toast } from 'react-toastify';

import { MdOutlineMoreTime } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [GoogleIcon] = useState(FcGoogle);
  const [ClockIcon] = useState(MdOutlineMoreTime);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const register = () => {
    if (!name) toast.error('Precisa digitar seu nome no formulário 👀✍️');
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/');
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
                  type="text"
                  className="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                />
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
                  placeholder="Crie uma senha"
                />
                <button className="btn login" onClick={register}>
                  Registrar
                </button>
              </div>
              <div className="RegistrationAndGetpassword">
                <Link to="/">Entrar com minha conta!</Link>
                <Link to="/reset">Esqueceu a senha?</Link>
              </div>
            </div>
            <div className="btns-socials">
              <button className="btn google" onClick={signInWithGoogle}>
                <span className="google">{GoogleIcon} Google</span>
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
