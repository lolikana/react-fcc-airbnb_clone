import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <>
      <div className="set-theme-mode" data-theme={theme}>
        <div>
        <button onClick={switchTheme} className="set-theme-mode-btn">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        </div>
      <Navbar />
      <Hero />
      <Card />
      </div>
    </>
  );
};

export default App;
