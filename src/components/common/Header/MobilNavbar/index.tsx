import { FC } from 'react';
import { NavItems } from '..';
import MobilNavIcon from './MobilNavIcon';

type MobilNavbarProps = {
  navItems: NavItems[];
};

const MobilNavbar: FC<MobilNavbarProps> = () => {
  return (
    <nav id="mobilNav" className="lg:hidden order-1 flex flex-col items-end gap-3 flex-grow">
      <MobilNavIcon />
    </nav>
  );
};

export default MobilNavbar;
