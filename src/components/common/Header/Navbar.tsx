/* eslint-disable no-debugger */
import { FC } from 'react';
import { NavItems } from '.';
import { useActiveNav } from '../../../hooks/useActiveNav';

type NavbarProps = {
  navItems: NavItems[];
};

const Navbar: FC<NavbarProps> = ({ navItems }) => {
  const { activeSection, handleNavLinkClick } = useActiveNav();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center capitalize gap-7 tracking-wider">
        {navItems.map((item, i) => (
          <li key={i}>
            <a
              className={`block cursor-pointer hover:text-light-orange transition-colors ${
                activeSection === item.id ? 'text-light-orange' : ''
              }`}
              onClick={() => handleNavLinkClick(item.id)}
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
