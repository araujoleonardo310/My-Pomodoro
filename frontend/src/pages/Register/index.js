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

import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineMoreTime } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [GoogleIcon] = useState(FcGoogle);
  const [GithubIcon] = useState(BsGithub);
  const [FaceBookIcon] = useState(FaFacebookSquare);
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
    <div className="container-login">
      <div className="containers">
        <div className="container-form">
          <div className="title">
            <sapn className="ClockIcon">{ClockIcon}</sapn>
            <p>Crie sua conta</p>
          </div>
          <form className="form">
            <section className="inputs-wrappers">
              <div className="wrappers">
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
    </div>
  );
};

export default Register;
