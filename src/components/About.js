'use client';

import messages from '../lib/messages';
import {
  getContainerStyle,
  getSectionStyle,
  getHeadingStyle,
  getBodyTextStyle,
  getFlexStyle,
  getBadgeStyle,
} from '../lib/styles';

export default function About({ currentTheme, lang }) {
  const t = messages[lang].about;

  const sectionStyle = {
    ...getSectionStyle(currentTheme),
    backgroundColor: currentTheme.surface,
  };

  const containerStyle = getContainerStyle(currentTheme);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
  };

  const labelStyle = {
    color: currentTheme.primary,
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '16px',
    display: 'block',
  };

  const headingStyle = {
    ...getHeadingStyle(currentTheme),
    fontSize: '40px',
    marginBottom: '24px',
  };

  const bodyStyle = {
    ...getBodyTextStyle(currentTheme),
    fontSize: '16px',
    marginBottom: '40px',
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  };

  const statItemStyle = {
    borderLeft: `3px solid ${currentTheme.primary}`,
    paddingLeft: '16px',
  };

  const statValueStyle = {
    color: currentTheme.text,
    fontSize: '22px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    display: 'block',
    marginBottom: '4px',
  };

  const statLabelStyle = {
    color: currentTheme.textSecondary,
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  };

  const imageBoxStyle = {
    backgroundColor: currentTheme.cardBg,
    border: `1px solid ${currentTheme.border}`,
    borderRadius: '8px',
    aspectRatio: '4/3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const imagePlaceholderStyle = {
    color: currentTheme.textSecondary,
    fontSize: '64px',
    userSelect: 'none',
  };

  const accentBarStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    backgroundColor: currentTheme.primary,
  };

  const stats = [
    { value: t.experience, label: '' },
    { value: t.clients, label: '' },
    { value: t.certifications, label: '' },
  ];

  return (
    <section id="about" style={sectionStyle} aria-label="About section">
      <div style={containerStyle}>
        <div style={gridStyle} className="about-grid">
          {/* Image column */}
          <div style={imageBoxStyle} aria-hidden="true">
            <span style={imagePlaceholderStyle}>🥊</span>
            <div style={accentBarStyle} />
          </div>

          {/* Content column */}
          <div>
            <span style={labelStyle}>About Me</span>
            <h2 style={headingStyle}>{t.title}</h2>
            <p style={bodyStyle}>{t.description}</p>

            <div style={statsStyle}>
              {[t.experience, t.clients, t.certifications].map((stat, i) => (
                <div key={i} style={statItemStyle}>
                  <span style={statValueStyle}>{stat.split(' ')[0]}</span>
                  <span style={statLabelStyle}>{stat.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
