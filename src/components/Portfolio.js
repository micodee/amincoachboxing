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

const PORTFOLIO_ICONS = ['🏆', '🥇', '💪', '🎯'];

export default function Portfolio({ currentTheme, lang }) {
  const t = messages[lang].portfolio;

  const sectionStyle = {
    ...getSectionStyle(currentTheme),
    backgroundColor: currentTheme.surface,
  };

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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  };

  const cardStyle = {
    ...getCardStyle(currentTheme),
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  };

  const iconBoxStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: currentTheme.background,
    border: `1px solid ${currentTheme.border}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    flexShrink: 0,
  };

  const cardTitleStyle = {
    color: currentTheme.text,
    fontSize: '17px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    letterSpacing: '-0.01em',
  };

  const numberStyle = {
    color: currentTheme.primary,
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <section id="portfolio" style={sectionStyle} aria-label="Portfolio section">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={labelStyle}>Portfolio</span>
          <h2 style={{ ...getHeadingStyle(currentTheme), margin: '0 0 16px 0' }}>{t.title}</h2>
          <p style={{ ...getSubheadingStyle(currentTheme), margin: '0 auto', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={gridStyle} className="portfolio-grid">
          {t.items.map((item, i) => (
            <article key={i} style={cardStyle}>
              <div style={iconBoxStyle} aria-hidden="true">
                {PORTFOLIO_ICONS[i % PORTFOLIO_ICONS.length]}
              </div>
              <div>
                <span style={numberStyle}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={cardTitleStyle}>{item.title}</h3>
                <p style={getBodyTextStyle(currentTheme)}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
