import { FC } from 'react';
import LandingSlogan from './LandingSlogan';
import LandingAnimation from './Animation';
const LandingContainer: FC = () => {
  return (
    <div className="wrapper relative w-full flex flex-col lg:flex-row justify-between items-start lg:items-center flex-wrap lg:min-h-[600px]">
      <LandingSlogan />
      <LandingAnimation />
    </div>
  );
};

export default LandingContainer;
