'use client';

import messages from '../lib/messages';
import {
  getContainerStyle,
  getSectionStyle,
  getHeadingStyle,
  getSubheadingStyle,
  getBodyTextStyle,
} from '../lib/styles';

export default function Certificates({ currentTheme, lang }) {
  const t = messages[lang].certificates;

  const sectionStyle = {
    ...getSectionStyle(currentTheme),
    backgroundColor: currentTheme.surface,
  };

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
    backgroundColor: currentTheme.cardBg,
    border: `1px solid ${currentTheme.border}`,
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  };

  const accentBarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '3px',
    height: '100%',
    backgroundColor: currentTheme.primary,
    borderRadius: '8px 0 0 8px',
  };

  const iconStyle = {
    fontSize: '28px',
    flexShrink: 0,
    lineHeight: '1',
    marginTop: '2px',
  };

  const titleStyle = {
    color: currentTheme.text,
    fontSize: '15px',
    fontWeight: '700',
    margin: '0 0 6px 0',
    letterSpacing: '-0.01em',
  };

  const issuerStyle = {
    ...getBodyTextStyle(currentTheme),
    fontSize: '13px',
    margin: '0 0 8px 0',
  };

  const yearBadgeStyle = {
    display: 'inline-block',
    backgroundColor: currentTheme.surface,
    border: `1px solid ${currentTheme.border}`,
    color: currentTheme.primary,
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    padding: '3px 8px',
    borderRadius: '2px',
  };

  return (
    <section id="certificates" style={sectionStyle} aria-label="Certificates section">
      <div style={getContainerStyle(currentTheme)}>
        <div style={headerStyle}>
          <span style={labelStyle}>Certificates</span>
          <h2 style={{ ...getHeadingStyle(currentTheme), margin: '0 0 16px 0' }}>{t.title}</h2>
          <p style={{ ...getSubheadingStyle(currentTheme), margin: '0 auto', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={gridStyle} className="cert-grid">
          {t.items.map((item, i) => (
            <div key={i} style={cardStyle}>
              <div style={accentBarStyle} aria-hidden="true" />
              <span style={iconStyle} aria-hidden="true">{item.icon}</span>
              <div>
                <h3 style={titleStyle}>{item.title}</h3>
                <p style={issuerStyle}>{item.issuer}</p>
                <span style={yearBadgeStyle}>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
