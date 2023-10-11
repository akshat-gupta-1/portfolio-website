import { Sun, MoonStar } from 'lucide-react';
import { useEffect, useState } from 'react';
type themeType = 'light' | 'dark';
const ToggleButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const initialTheme = window.localStorage.getItem('theme') as themeType;
    return initialTheme ? initialTheme : 'light';
  });
  const handleClick = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <button
      className="hover:text-primary text-text transition-all duration-300 ease-in"
      onClick={handleClick}
    >
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </button>
  );
};

export default ToggleButton;
