/* eslint-disable no-console */
import { useEffect, useContext } from 'react';
import { SettingsContext } from '../../context';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import { auth, handleOutClick } from '../../config';
import SetPomodoro from '../../components/SetPomodoro';
import CountdownAnimation from '../../components/CountdownAnimation';

import './style.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const history = useHistory();
  const [user, loading] = useAuthState(auth);
  const {
    color,
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      history.replace('/');
    }

    updateExecute(executing);
  }, [executing, updateExecute, loading, user]);

  return (
    <div className="container__home">
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
      <h1>My Pomodoro</h1>
      <small>Sendo produtivo na contagem certa!⏱️</small>
      {pomodoro !== 0 ? (
        <>
          <ul className="TimesOfPomodoro">
            <li>
              <Button
                title="Pomodoro"
                activeClass={
                  executing.active === 'work' ? 'btn-active' : undefined
                }
                _callback={() => setCurrentTimer('work')}
              />
            </li>
            <li>
              <Button
                title="Pausa Curta"
                activeClass={
                  executing.active === 'short' ? 'btn-active' : undefined
                }
                _callback={() => setCurrentTimer('short')}
              />
            </li>
            <li>
              <Button
                title="Pausa Longa"
                activeClass={
                  executing.active === 'long' ? 'btn-active' : undefined
                }
                _callback={() => setCurrentTimer('long')}
              />
            </li>
          </ul>
          <section>
            <Button
              title="Configurações"
              _callback={SettingsBtn}
              className="settings-btn"
            />
            <button className="settings-btn" onClick={handleOutClick}>
              Sair
            </button>
          </section>
          <div className="container__time">
            <div className="PomodoroStart">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
                color={color}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="btns_controls">
            <Button
              title="Iniciar"
              activeClass={!startAnimate ? 'active' : undefined}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              activeClass={startAnimate ? 'active' : undefined}
              _callback={pauseTimer}
            />
          </div>
        </>
      ) : (
        <SetPomodoro />
      )}
    </div>
  );
};

export default Home;
