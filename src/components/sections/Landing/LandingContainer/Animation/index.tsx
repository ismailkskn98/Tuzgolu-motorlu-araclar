import { FC } from 'react';
import LandingFrontAnimation from './LandingFrontAnimation';
import { motion } from 'framer-motion';

const LandingAnimation: FC = () => {
  return (
    <motion.div
      initial={{ translateY: '100px' }}
      animate={{ translateY: 0 }}
      className="relative min-h-[200px] lg:min-h-[400px] xl:min-h-[600px] flex justify-center items-center w-full lg:w-auto lg:flex-grow"
    >
      <LandingFrontAnimation />
    </motion.div>
  );
};

export default LandingAnimation;
