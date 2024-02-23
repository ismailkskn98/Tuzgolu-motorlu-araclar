import { FC } from 'react';
import Header from '../../common/Header';
import LandingShape from './LandingShape';
import LandingContainer from './LandingContainer';
import { motion } from 'framer-motion';

const Landing: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="anasayfa"
      className="relative w-full h-auto pb-24 lg:pb-0 lg:min-h-[900px] flex flex-col items-center gap-8 lg:gap-10 bg-landing-light-bg dark:bg-landing-dark-bg bg-cover lg:bg-fixed bg-repeat bg-center overflow-hidden"
    >
      <div className="absolute -bottom-[.2px] left-0 w-full rotate-180 overflow-hidden">
        <LandingShape />
      </div>
      <Header />
      <LandingContainer />
    </motion.section>
  );
};

export default Landing;
