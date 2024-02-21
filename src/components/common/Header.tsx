import { FC } from 'react';
import logo from '../../assets/images/logo.png';
import ThemeBtn from '../buttons/ThemeBtn';
import Navbar from './Navbar';

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
    <header className="w-full fixed">
      <div className="wrapper flex justify-between items-center max-h-28 py-4 text-light-white dark:text-dark-white">
        <img src={logo} alt="tuzgolu motorlu araçlar logo" className="max-h-24" />
        <Navbar navItems={navItems} />
        <div className="buttons flex items-center gap-3">
          <span>B</span>
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
