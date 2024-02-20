import { FC } from 'react';
import { motion } from 'framer-motion';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import { CiLight, CiDark } from 'react-icons/ci';

const ThemeBtn: FC = () => {
  const { themeToggle } = useThemeToggle('light');

  return (
    <div
      className="relative h-7 w-12 rounded-[32px] px-1 py-2 cursor-pointer flex items-center justify-start bg-slate-800 dark:justify-end dark:bg-slate-100"
      onClick={themeToggle}
    >
      {/* Framer Motion'ın düzen animasyonlarını etkinleştirmek için "layout" propunu vermek yeterli */}
      <motion.div className="w-4 h-4 rounded-[8px] z-10 drop-shadow-2xl bg-white dark:bg-slate-800" layout transition={spring} />
      <CiLight className="absolute top-1/2 -translate-y-1/2 left-1 text-slate-800 transition-opacity text-lg opacity-0 dark:opacity-100" />
      <CiDark className="absolute top-1/2 -translate-y-1/2 right-1 text-white transition-opacity text-lg opacity-100 dark:opacity-0" />
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
