import { CssBaseline, GeistProvider } from '@geist-ui/react';
import React, { useState } from 'react';
import './App.css';
import PageLayout from './components/PageLayout/PageLayout';

const App = () => {
  const [themeType, setThemeType] = useState('light');

  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PageLayout switchThemes={switchThemes} themeType={themeType} />
      </GeistProvider>
    </div>
  );
};

export default App;
