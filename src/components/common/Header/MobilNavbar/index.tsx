import { FC, useState } from 'react';
import { NavItems } from '../index';
import MobilNavIcon from './MobilNavIcon';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../../../assets/images/logo.png';
import { IoClose } from 'react-icons/io5';

type MobilNavbarProps = {
  navItems: NavItems[];
};

const MobilNavbar: FC<MobilNavbarProps> = ({ navItems }) => {
  const [isShow, setIsShow] = useState(false);
  const handleNavClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <nav id="mobilNav" className="lg:hidden order-1 flex flex-col items-end gap-3 flex-grow">
      <MobilNavIcon handleNavClick={handleNavClick} />
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ translateX: '600px' }}
            animate={{ translateX: '0px' }}
            exit={{ translateX: '600px' }}
            className="wrapper h-full w-full fixed top-0 left-0 z-50 bg-light-light"
          >
            <header className="flex items-center justify-between py-3">
              <img src={logo} alt="tuzgolu yedek parcalar" className="max-h-20" />
              <IoClose className="text-light-teal text-5xl" onClick={handleNavClick} />
            </header>
            <ul>
              {navItems.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobilNavbar;
