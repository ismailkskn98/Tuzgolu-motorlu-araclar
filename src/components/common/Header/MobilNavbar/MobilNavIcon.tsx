import { FC } from 'react';

const iconElements = ['w-5', 'w-3', 'w-8', 'w-5'];

type Props = {
  handleNavClick: () => void;
};

const MobilNavIcon: FC<Props> = ({ handleNavClick }) => {
  return (
    <div onClick={() => handleNavClick()} className="flex flex-col items-start gap-3 cursor-pointer group min-w-10 max-h-12">
      {iconElements.map((item, i) => (
        <div key={i} className={`${item} h-1 bg-light-light group-hover:w-10 transition-all`}></div>
      ))}
    </div>
  );
};

export default MobilNavIcon;
