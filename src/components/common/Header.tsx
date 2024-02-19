import { FC } from 'react';
import logo from '../../assets/images/logo.png';
import ThemeBtn from '../buttons/ThemeBtn';

type NavItems = {
  link: string;
  title: string;
};

const navItems: NavItems[] = [
  { link: '#', title: 'anasayfa' },
  { link: '#yedek-parcalar', title: 'yedek parcalar' },
  { link: '#hakkimizda', title: 'hakkımızda' },
  { link: '#galeri', title: 'galeri' },
  { link: '#iletisim', title: 'İletişim' },
];

const Header: FC = () => {
  return (
    <header>
      <div className="wrapper flex justify-between items-center max-h-28 py-4 text-light-white dark:text-dark-white">
        <img src={logo} alt="tuzgolu motorlu araçlar logo" className="max-h-24" />
        <nav>
          <ul className="flex items-center capitalize gap-7 tracking-wider">
            {navItems.map((item, i) => (
              <li key={i}>
                <a className="block cursor-pointer hover:text-light-orange transition-colors" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="buttons flex items-center gap-3">
          <span>B</span>
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
