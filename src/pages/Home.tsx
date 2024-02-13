import { FC } from 'react';
import { useThemeToggle } from '../hooks/useThemeToggle';

const Home: FC = () => {
  const { themeToggle } = useThemeToggle('light');
  return (
    <div>
      Home
      <button onClick={themeToggle}>Light / Dark Theme</button>
    </div>
  );
};

export default Home;
