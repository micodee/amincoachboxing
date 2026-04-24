'use client';

import messages from '../lib/messages';
import {
  getContainerStyle,
  getSectionStyle,
  getCardStyle,
  getHeadingStyle,
  getSubheadingStyle,
  getBodyTextStyle,
  getBadgeStyle,
} from '../lib/styles';

const SERVICE_ICONS = {
  boxing: '🥊',
  pilates: '🧘',
  mma: '🥋',
};

export default function Services({ currentTheme, lang }) {
  const t = messages[lang].services;

  const sectionStyle = getSectionStyle(currentTheme);
  const containerStyle = getContainerStyle(currentTheme);

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '56px',
  };

  const labelStyle = {
    color: currentTheme.primary,
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '16px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  };

  const cardStyle = {
    ...getCardStyle(currentTheme),
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'box-shadow 0.2s, transform 0.2s',
  };

  const iconWrapStyle = {
    width: '56px',
    height: '56px',
    backgroundColor: currentTheme.surface,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    flexShrink: 0,
  };

  const cardTitleStyle = {
    color: currentTheme.text,
    fontSize: '20px',
    fontWeight: '800',
    letterSpacing: '-0.01em',
    margin: '0',
  };

  const accentStyle = {
    width: '32px',
    height: '3px',
    backgroundColor: currentTheme.primary,
    borderRadius: '2px',
  };

  const services = [
    { key: 'boxing', data: t.boxing },
    { key: 'pilates', data: t.pilates },
    { key: 'mma', data: t.mma },
  ];

  return (
    <section id="services" style={sectionStyle} aria-label="Services section">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={labelStyle}>Services</span>
          <h2 style={{ ...getHeadingStyle(currentTheme), margin: '0 0 16px 0' }}>{t.title}</h2>
          <p style={{ ...getSubheadingStyle(currentTheme), margin: '0 auto', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={gridStyle} className="services-grid">
          {services.map(({ key, data }) => (
            <article key={key} style={cardStyle}>
              <div style={iconWrapStyle} aria-hidden="true">
                {SERVICE_ICONS[key]}
              </div>
              <div style={accentStyle} aria-hidden="true" />
              <h3 style={cardTitleStyle}>{data.title}</h3>
              <p style={getBodyTextStyle(currentTheme)}>{data.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
