'use client';

import { useState } from 'react';
import messages from '../lib/messages';
import {
  getNavStyle,
  getNavLinkStyle,
  getContainerStyle,
} from '../lib/styles';

export default function Navbar({ currentTheme, lang, toggleTheme, toggleLang, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = messages[lang].nav;

  const navLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'certificates', href: '#certificates' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  const navStyle = getNavStyle(currentTheme);
  const containerStyle = getContainerStyle(currentTheme);
  const linkStyle = getNavLinkStyle(currentTheme);

  const brandStyle = {
    color: currentTheme.primary,
    fontSize: '20px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
  };

  const toggleBtnStyle = {
    backgroundColor: 'transparent',
    border: `1px solid ${currentTheme.border}`,
    borderRadius: '4px',
    color: currentTheme.text,
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    padding: '6px 12px',
    textTransform: 'uppercase',
    transition: 'border-color 0.2s, color 0.2s',
    lineHeight: '1.4',
  };

  const controlsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  };

  const hamburgerStyle = {
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px',
  };

  const barStyle = {
    width: '22px',
    height: '2px',
    backgroundColor: currentTheme.text,
    borderRadius: '2px',
    transition: 'background-color 0.2s',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    backgroundColor: currentTheme.navBg,
    borderBottom: `1px solid ${currentTheme.border}`,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    padding: '16px 24px',
    flexDirection: 'column',
    gap: '16px',
    zIndex: 99,
  };

  return (
    <nav style={navStyle} role="navigation" aria-label="Main navigation">
      <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Brand */}
        <a href="#hero" style={brandStyle} aria-label="Go to top">
          Aminudin
        </a>

        {/* Desktop nav links */}
        <ul style={linksStyle} className="navbar-links" aria-label="Navigation links">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <a href={href} style={linkStyle}>
                {t[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: theme + lang toggles */}
        <div style={controlsStyle}>
          <button
            style={toggleBtnStyle}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? '☀ Light' : '☾ Dark'}
          </button>
          <button
            style={toggleBtnStyle}
            onClick={toggleLang}
            aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Hamburger — visible on mobile via inline media query workaround */}
          <button
            style={hamburgerStyle}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen ? 'true' : 'false'}
            className="navbar-hamburger"
          >
            <span style={barStyle} />
            <span style={barStyle} />
            <span style={barStyle} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        style={mobileMenuStyle}
        className={`navbar-mobile-menu${menuOpen ? ' navbar-mobile-menu--open' : ''}`}
        aria-hidden={menuOpen ? 'false' : 'true'}
      >
        {navLinks.map(({ key, href }) => (
          <a
            key={key}
            href={href}
            style={{ ...linkStyle, padding: '8px 0' }}
            onClick={() => setMenuOpen(false)}
          >
            {t[key]}
          </a>
        ))}
      </div>
    </nav>
  );
}
