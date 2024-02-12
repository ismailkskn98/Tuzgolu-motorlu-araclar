import { useThemeToggle } from './hooks/useThemeToggle';

function App() {
  const { themeToggle } = useThemeToggle('light');

  return (
    <>
      <button onClick={themeToggle}>Light / Dark Theme</button>
    </>
  );
}

export default App;
