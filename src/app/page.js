'use client';

import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../lib/theme';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Certificates from '../components/Certificates';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('id');

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const isDark = theme === 'dark';

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'));

  // Render with lightTheme on server, swap after mount to avoid mismatch
  const resolvedTheme = mounted ? currentTheme : lightTheme;
  const resolvedLang = mounted ? lang : 'id';
  const resolvedIsDark = mounted ? isDark : false;

  return (
    <main style={{ backgroundColor: resolvedTheme.background, minHeight: '100vh' }}>
      <Navbar
        currentTheme={resolvedTheme}
        lang={resolvedLang}
        toggleTheme={toggleTheme}
        toggleLang={toggleLang}
        isDark={resolvedIsDark}
      />
      <Hero currentTheme={resolvedTheme} lang={resolvedLang} />
      <About currentTheme={resolvedTheme} lang={resolvedLang} />
      <Services currentTheme={resolvedTheme} lang={resolvedLang} />
      <Portfolio currentTheme={resolvedTheme} lang={resolvedLang} />
      <Testimonials currentTheme={resolvedTheme} lang={resolvedLang} />
      <Certificates currentTheme={resolvedTheme} lang={resolvedLang} />
      <FAQ currentTheme={resolvedTheme} lang={resolvedLang} />
      <Contact currentTheme={resolvedTheme} lang={resolvedLang} />
    </main>
  );
}
