import { FC } from 'react';
import LandingSlogan from './LandingSlogan';
import LandingAnimation from './Animation';

const LandingContainer: FC = () => {
  return (
    <div className="wrapper w-full flex justify-between items-center flex-wrap min-h-[600px]">
      <LandingSlogan />
      <LandingAnimation />
    </div>
  );
};

export default LandingContainer;
