import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { SettingsContext } from '../../context';
import './style.css';

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0,
    short: 5,
    long: 15,
    active: 'work',
  });

  const [color, setColor] = useState('#fff');

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer, color);
  };

  return (
    <Modal
      show={true}
      children={
        <div className="form-container">
          <form noValidate onSubmit={handleSubmit}>
            <div className="inputs-times">
              <label>
                <span>Contagem</span>
                <input
                  className="input"
                  type="number"
                  min="1"
                  name="work"
                  onChange={handleChange}
                  value={newTimer.work}
                />
              </label>

              <label>
                <span>Pausa Curta</span>
                <input
                  className="input"
                  type="number"
                  min="1"
                  name="shortBreak"
                  onChange={handleChange}
                  value={newTimer.short}
                />
              </label>

              <label>
                <span>Pausa Longa</span>
                <input
                  className="input"
                  type="number"
                  min="1"
                  name="longBreak"
                  onChange={handleChange}
                  value={newTimer.long}
                />
              </label>
            </div>

            <div className="inputs-colors">
              <label>
                <span>Cores</span>
              </label>
              <div className="list-colors">
                <input
                  onClick={() => {
                    setColor('#f87170');
                  }}
                  className="color-one"
                />
                <input
                  onClick={() => {
                    setColor('#f87170');
                  }}
                  className="color-two"
                />
                <input
                  onClick={() => {
                    setColor('#f870a4');
                  }}
                  className="color-three"
                />
              </div>
            </div>
            <button type="submit" className="applay">
              Aplicar
            </button>
          </form>
        </div>
      }
    ></Modal>
  );
};

export default SetPomodoro;
