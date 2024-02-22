import { FC } from 'react';
import { NavItems } from '..';

type MobilNavbarProps = {
  navItems: NavItems[];
};

const MobilNavbar: FC<MobilNavbarProps> = () => {
  return (
    <nav id="mobilNav" className="lg:hidden order-1 flex flex-col items-center gap-3">
      <div className="w-9 h-1 bg-white"></div>
      <div className="w-9 h-1 bg-white"></div>
      <div className="w-9 h-1 bg-white"></div>
    </nav>
  );
};

export default MobilNavbar;
