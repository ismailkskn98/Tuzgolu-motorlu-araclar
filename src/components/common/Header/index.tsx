import { FC } from 'react';
import logo from '../../../assets/images/logo.png';
import ThemeBtn from '../../../components/buttons/ThemeBtn';
import Navbar from './Navbar';
import MobilNavbar from './MobilNavbar';
import { useIsScroll } from '../../../hooks/useIsScroll';

export type NavItems = {
  id: string;
  link: string;
  title: string;
};

const navItems: NavItems[] = [
  { id: 'anasayfa', link: '#anasayfa', title: 'anasayfa' },
  { id: 'yedek-parcalar', link: '#yedek-parcalar', title: 'yedek parcalar' },
  { id: 'hakkimizda', link: '#hakkimizda', title: 'hakkımızda' },
  { id: 'galeri', link: '#galeri', title: 'galeri' },
  { id: 'iletisim', link: '#iletisim', title: 'İletişim' },
];

const Header: FC = () => {
  const isScroll = useIsScroll();

  return (
    <header
      className={`fixed top-0 left-0 w-full py-3 z-50 ${
        isScroll && 'backdrop-blur-[50px] bg-light-teal/70 dark:bg-dark-black/70 '
      }`}
    >
      <div className="wrapper flex justify-between items-center max-h-28 text-light-white dark:text-dark-white">
        <img
          src={logo}
          alt="tuzgolu motorlu araçlar logo"
          className={`transition-all ${isScroll ? 'max-h-[54px] lg:max-h-[70px]' : 'max-h-20 lg:max-h-24'}`}
        />
        <Navbar navItems={navItems} />
        <MobilNavbar navItems={navItems} />
        <div className="buttons items-center gap-3 hidden lg:flex">
          <span>B</span>
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
