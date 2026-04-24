'use client';

import { useState } from 'react';
import messages from '../lib/messages';
import {
  getContainerStyle,
  getSectionStyle,
  getHeadingStyle,
  getSubheadingStyle,
  getBodyTextStyle,
  getButtonStyle,
  getInputStyle,
  getTextareaStyle,
  getCardStyle,
} from '../lib/styles';

export default function Contact({ currentTheme, lang }) {
  const t = messages[lang].contact;
  const [submitted, setSubmitted] = useState(false);

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
    gridTemplateColumns: '1fr 1.6fr',
    gap: '48px',
    alignItems: 'start',
  };

  const infoCardStyle = {
    ...getCardStyle(currentTheme),
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  };

  const infoIconStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: currentTheme.background,
    border: `1px solid ${currentTheme.border}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    flexShrink: 0,
  };

  const infoLabelStyle = {
    color: currentTheme.textSecondary,
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '4px',
  };

  const infoValueStyle = {
    color: currentTheme.text,
    fontSize: '15px',
    fontWeight: '500',
    margin: '0',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const formCardStyle = getCardStyle(currentTheme);

  const successStyle = {
    textAlign: 'center',
    padding: '48px 24px',
    color: currentTheme.text,
  };

  const successIconStyle = {
    fontSize: '48px',
    display: 'block',
    marginBottom: '16px',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: '📞', label: 'Phone', value: t.phone },
    { icon: '✉️', label: 'Email', value: t.email },
    { icon: '📍', label: 'Location', value: t.location },
  ];

  return (
    <section id="contact" style={sectionStyle} aria-label="Contact section">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={labelStyle}>Contact</span>
          <h2 style={{ ...getHeadingStyle(currentTheme), margin: '0 0 16px 0' }}>{t.title}</h2>
          <p style={{ ...getSubheadingStyle(currentTheme), margin: '0 auto', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={gridStyle} className="contact-grid">
          {/* Contact info */}
          <div style={infoCardStyle}>
            {contactItems.map(({ icon, label, value }) => (
              <div key={label} style={infoItemStyle}>
                <div style={infoIconStyle} aria-hidden="true">{icon}</div>
                <div>
                  <span style={infoLabelStyle}>{label}</span>
                  <p style={infoValueStyle}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div style={formCardStyle}>
            {submitted ? (
              <div style={successStyle} role="status" aria-live="polite">
                <span style={successIconStyle} aria-hidden="true">✅</span>
                <p style={{ ...getBodyTextStyle(currentTheme), fontSize: '16px' }}>
                  {lang === 'id'
                    ? 'Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.'
                    : 'Your message has been sent! We will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form style={formStyle} onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ ...getBodyTextStyle(currentTheme), fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '6px' }}
                  >
                    {t.namePlaceholder}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    required
                    style={getInputStyle(currentTheme)}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ ...getBodyTextStyle(currentTheme), fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '6px' }}
                  >
                    {t.emailPlaceholder}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    required
                    style={getInputStyle(currentTheme)}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ ...getBodyTextStyle(currentTheme), fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '6px' }}
                  >
                    {t.messagePlaceholder}
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder={t.messagePlaceholder}
                    required
                    style={getTextareaStyle(currentTheme)}
                    aria-required="true"
                  />
                </div>
                <button type="submit" style={{ ...getButtonStyle(currentTheme), alignSelf: 'flex-start' }}>
                  {t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
