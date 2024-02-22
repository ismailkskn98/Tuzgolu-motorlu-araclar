import { FC } from 'react';
import LandingFrontAnimation from './LandingFrontAnimation';

const LandingAnimation: FC = () => {
  return (
    <div className="relative min-h-[200px] lg:min-h-[400px] xl:min-h-[600px] flex justify-center items-center w-full lg:w-auto lg:flex-grow">
      <LandingFrontAnimation />
    </div>
  );
};

export default LandingAnimation;
