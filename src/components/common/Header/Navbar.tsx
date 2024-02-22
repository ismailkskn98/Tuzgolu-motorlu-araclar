/* eslint-disable no-debugger */
import { FC, useEffect, useState } from 'react';
import { NavItems } from '.';

type NavbarProps = {
  navItems: NavItems[];
};

const Navbar: FC<NavbarProps> = ({ navItems }) => {
  const [activeSection, setActiveSection] = useState<string>('anasayfa');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentActiveSection = section.id;
        }
      });
      setActiveSection(currentActiveSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: 'smooth' });
  };
  console.log(activeSection);

  return (
    <nav>
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
