'use client';

import { useState } from 'react';
import { lightTheme, darkTheme } from '../lib/theme';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('id');

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const isDark = theme === 'dark';

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'));

  return (
    <main style={{ backgroundColor: currentTheme.background, minHeight: '100vh' }}>
      <Navbar
        currentTheme={currentTheme}
        lang={lang}
        toggleTheme={toggleTheme}
        toggleLang={toggleLang}
        isDark={isDark}
      />
      <Hero currentTheme={currentTheme} lang={lang} />
      <About currentTheme={currentTheme} lang={lang} />
      <Services currentTheme={currentTheme} lang={lang} />
      <Portfolio currentTheme={currentTheme} lang={lang} />
      <Testimonials currentTheme={currentTheme} lang={lang} />
      <Contact currentTheme={currentTheme} lang={lang} />
    </main>
  );
}
