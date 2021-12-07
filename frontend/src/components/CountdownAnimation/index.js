import { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingsContext } from '../../context'

const CountdownAnimation = ({key = 1, timer, animate, children, color }) => {

    const { stopAnimate } = useContext(SettingsContext)
  
      return (
        <CountdownCircleTimer
          key={key}
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
      )
  }
  
  export default CountdownAnimation
