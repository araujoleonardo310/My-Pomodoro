import { useContext } from 'react';
import { SettingsContext } from '../../context';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownAnimation = ({ timer, animate, children, color }) => {
  const { stopAnimate } = useContext(SettingsContext);
  
  return (
    <CountdownCircleTimer
      key={0}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        [color, 0.33],
        [color, 0.33],
        [color, 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => stopAnimate}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
