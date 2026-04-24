'use client';

import messages from '../lib/messages';
import {
  getContainerStyle,
  getSectionStyle,
  getCardStyle,
  getHeadingStyle,
  getSubheadingStyle,
  getBodyTextStyle,
} from '../lib/styles';

export default function Testimonials({ currentTheme, lang }) {
  const t = messages[lang].testimonials;

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
    gap: '20px',
  };

  const quoteMarkStyle = {
    color: currentTheme.primary,
    fontSize: '40px',
    lineHeight: '1',
    fontFamily: 'Georgia, serif',
    marginBottom: '-8px',
    userSelect: 'none',
  };

  const quoteTextStyle = {
    ...getBodyTextStyle(currentTheme),
    fontStyle: 'italic',
    flexGrow: 1,
  };

  const dividerStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: currentTheme.border,
  };

  const authorRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: currentTheme.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '700',
    flexShrink: 0,
  };

  const authorNameStyle = {
    color: currentTheme.text,
    fontSize: '14px',
    fontWeight: '700',
    margin: '0 0 2px 0',
  };

  const authorRoleStyle = {
    color: currentTheme.textSecondary,
    fontSize: '12px',
    fontWeight: '400',
    margin: '0',
    letterSpacing: '0.03em',
  };

  const starsStyle = {
    color: '#F4C430',
    fontSize: '13px',
    letterSpacing: '2px',
  };

  return (
    <section id="testimonials" style={sectionStyle} aria-label="Testimonials section">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={labelStyle}>Testimonials</span>
          <h2 style={{ ...getHeadingStyle(currentTheme), margin: '0 0 16px 0' }}>{t.title}</h2>
          <p style={{ ...getSubheadingStyle(currentTheme), margin: '0 auto', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={gridStyle} className="testimonials-grid">
          {t.items.map((item, i) => (
            <article key={i} style={cardStyle}>
              <div style={quoteMarkStyle} aria-hidden="true">&ldquo;</div>
              <p style={quoteTextStyle}>{item.text}</p>
              <div style={starsStyle} aria-label="5 stars">★★★★★</div>
              <div style={dividerStyle} aria-hidden="true" />
              <div style={authorRowStyle}>
                <div style={avatarStyle} aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p style={authorNameStyle}>{item.name}</p>
                  <p style={authorRoleStyle}>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
