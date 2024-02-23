import { FC, useState } from 'react';
import { NavItems } from '../index';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../../../assets/images/logo.png';
import { IoClose } from 'react-icons/io5';
import ThemeBtn from '../../../buttons/ThemeBtn';
import { SlMenu } from 'react-icons/sl';

type MobilNavbarProps = {
  navItems: NavItems[];
};

const MobilNavbar: FC<MobilNavbarProps> = ({ navItems }) => {
  const [isShow, setIsShow] = useState(false);
  const handleNavClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <nav id="mobilNav" className="lg:hidden">
      <SlMenu onClick={handleNavClick} className="text-4xl" />
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ translateX: '600px' }}
            animate={{ translateX: '0px' }}
            exit={{ translateX: '600px' }}
            className="h-full w-full fixed top-0 left-0 z-50 px-6 pb-10 flex flex-col items-center gap-14 bg-light-white text-black dark:text-dark-white dark:bg-dark-black"
          >
            <header className="w-full flex items-center justify-between py-3">
              <img src={logo} alt="tuzgolu yedek parcalar" className="max-h-20" />
              <IoClose className="text-black text-[40px] dark:text-dark-white" onClick={handleNavClick} />
            </header>
            <ul className="flex flex-col items-center gap-10 flex-grow text-2xl">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a href={item.link} onClick={handleNavClick} className="block capitalize text-center">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <footer className="w-full flex justify-between">
              <ThemeBtn /> A
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobilNavbar;
