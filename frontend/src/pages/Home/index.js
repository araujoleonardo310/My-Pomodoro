import { useEffect, useContext } from "react";
import Button from "../../components/Button";
import CountdownAnimation from "../../components/CountdownAnimation"
import SetPomodoro from "../../components/SetPomodoro";
import { SettingsContext } from "../../context";


const Home = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => {updateExecute(executing)},[executing, startAnimate])

  return (
    <div className="container">
      <h1>My Pomodoro</h1>
      <small>Sendo produtivo na contagem certa!⏱️</small>
      {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Preferência" 
              activeClass={executing.active === 'work' ? 'active-label-work' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Pausa Curta" 
              activeClass={executing.active === 'short' ? 'active-label-short' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Pausa Longa" 
              activeClass={executing.active === 'long' ? 'active-label-long' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        <Button title="Settings" _callback={SettingsBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Iniciar" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}

export default Home
