import { FC } from 'react';
import logo from '../../../assets/images/logo.png';
import ThemeBtn from '../../../components/buttons/ThemeBtn';
import Navbar from './Navbar';
import MobilNavbar from './MobilNavbar';

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
  return (
    <header className="w-full py-3">
      <div className="wrapper flex justify-between items-center max-h-28 text-light-white dark:text-dark-white">
        <img src={logo} alt="tuzgolu motorlu araçlar logo" className="max-h-20 lg:max-h-24" />
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
