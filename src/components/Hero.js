'use client';

import messages from '../lib/messages';
import {
  getContainerStyle,
  getButtonStyle,
  getButtonSecondaryStyle,
  getFlexStyle,
} from '../lib/styles';

export default function Hero({ currentTheme, lang }) {
  const t = messages[lang].hero;

  const sectionStyle = {
    backgroundColor: currentTheme.background,
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    padding: '80px 0',
    width: '100%',
  };

  const containerStyle = getContainerStyle(currentTheme);

  const eyebrowStyle = {
    display: 'inline-block',
    color: currentTheme.primary,
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '24px',
  };

  const titleStyle = {
    color: currentTheme.text,
    fontSize: 'clamp(32px, 6vw, 72px)',
    fontWeight: '900',
    letterSpacing: '-0.03em',
    lineHeight: '1.05',
    margin: '0 0 24px 0',
    maxWidth: '700px',
  };

  const subtitleStyle = {
    color: currentTheme.textSecondary,
    fontSize: 'clamp(15px, 2vw, 18px)',
    fontWeight: '400',
    lineHeight: '1.65',
    margin: '0 0 48px 0',
    maxWidth: '520px',
  };

  const ctaGroupStyle = {
    ...getFlexStyle({ align: 'center', gap: 16 }),
    flexWrap: 'wrap',
  };

  const accentLineStyle = {
    width: '48px',
    height: '4px',
    backgroundColor: currentTheme.primary,
    borderRadius: '2px',
    marginBottom: '32px',
  };

  return (
    <section id="hero" style={sectionStyle} aria-label="Hero section">
      <div style={containerStyle}>
        <span style={eyebrowStyle}>Personal Trainer</span>
        <div style={accentLineStyle} aria-hidden="true" />
        <h1 style={titleStyle}>{t.title}</h1>
        <p style={subtitleStyle}>{t.subtitle}</p>
        <div style={ctaGroupStyle}>
          <a href="#contact" style={getButtonStyle(currentTheme)}>
            {t.cta}
          </a>
          <a href="#services" style={getButtonSecondaryStyle(currentTheme)}>
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
