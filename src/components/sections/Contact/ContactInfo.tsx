import { FC } from 'react';

const ContactInfo: FC = () => {
  return (
    <div className="relative overflow-hidden w-full lg:w-[40%] p-10 min-h-[570px] rounded bg-light-teal text-white dark:bg-dark-gray">
      <div className="absolute bottom-14 right-14 bg-light-light/50 w-[138px] h-[138px] rounded-full"></div>
      <div className="absolute -bottom-28 -right-28 bg-light-light/60 w-[269px] h-[269px] rounded-full"></div>
      <h2 className="text-[28px] tracking-wide capitalize font-semibold">İletişim Bilgileri</h2>
      <p className="text-sm italic text-light-light">Bize buralardan canlı bir şekilde ulaşabilirsin!</p>
    </div>
  );
};

export default ContactInfo;
