import { FC } from 'react';

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
      <div className="wrapper flex justify-between items-center">
        <span>LOGO</span>
        <nav>
          <ul className="flex items-center capitalize">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.link} />
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="buttons">
          <span>A</span>
          <span>B</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
