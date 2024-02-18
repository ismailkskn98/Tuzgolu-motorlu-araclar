import { FC } from 'react';
import { motion } from 'framer-motion';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import { CiLight, CiDark } from 'react-icons/ci';

const ThemeBtn: FC = () => {
  const { theme, themeToggle } = useThemeToggle('light');
  console.log(theme);

  return (
    <div
      className={`relative h-6 w-11 rounded-[32px] px-1 py-2 cursor-pointer flex items-center ${
        theme === 'light' ? 'justify-start bg-slate-800' : 'justify-end bg-slate-100'
      }`}
      onClick={themeToggle}
    >
      {/* Framer Motion'ın düzen animasyonlarını etkinleştirmek için "layout" propunu vermek yeterli */}
      <motion.div
        className={`w-4 h-4 rounded-[8px] z-10 drop-shadow-2xl ${theme === 'light' ? 'bg-white' : 'bg-slate-800'}`}
        layout
        transition={spring}
      />
      <CiLight
        className={`absolute top-1/2 -translate-y-1/2 left-1 text-slate-800 transition-opacity ${
          theme === 'light' ? 'opacity-0' : 'opacity-1'
        }`}
      />
      <CiDark
        className={`absolute top-1/2 -translate-y-1/2 right-1 text-white transition-opacity ${
          theme === 'dark' ? 'opacity-0' : 'opacity-1'
        }`}
      />
    </div>
  );
};
const spring = {
  // Tween, Spring or Inertia
  type: 'spring',
  stiffness: 1200, // sertlik
  damping: 30, // durdurma, söndürme
};
export default ThemeBtn;
