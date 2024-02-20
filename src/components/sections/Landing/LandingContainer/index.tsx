import { FC } from 'react';
import LandingSlogan from './LandingSlogan';
import LandingAnimation from './LandingAnimation';

const LandingContainer: FC = () => {
  return (
    <section className="wrapper w-full flex justify-between items-center flex-wrap min-h-[600px]">
      <LandingSlogan />
      <LandingAnimation />
    </section>
  );
};

export default LandingContainer;
