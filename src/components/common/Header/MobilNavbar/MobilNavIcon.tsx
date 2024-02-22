import { FC } from 'react';

const iconElements = ['w-5', 'w-3', 'w-8', 'w-5'];

const MobilNavIcon: FC = () => {
  return (
    <div className="flex flex-col items-start gap-3 cursor-pointer group min-w-10">
      {iconElements.map((item, i) => (
        <div key={i} className={`${item} h-1 bg-white group-hover:w-10 transition-all`}></div>
      ))}
    </div>
  );
};

export default MobilNavIcon;
