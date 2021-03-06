import React from 'react';

import Lottie from 'react-lottie';

const LottieAnimation = ({ name }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/${name}`),
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={700} />
    </div>
  );
};

export default LottieAnimation;
