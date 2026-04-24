'use client';

import { useState } from 'react';
import messages from '../lib/messages';
import {
  getContainerStyle,
  getSectionStyle,
  getHeadingStyle,
  getSubheadingStyle,
  getBodyTextStyle,
} from '../lib/styles';

export default function FAQ({ currentTheme, lang }) {
  const t = messages[lang].faq;
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  const sectionStyle = getSectionStyle(currentTheme);

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

  const listStyle = {
    maxWidth: '720px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const itemBaseStyle = {
    backgroundColor: currentTheme.cardBg,
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'border-color 0.2s',
  };

  const questionBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    padding: '18px 24px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    color: currentTheme.text,
    fontSize: '15px',
    lineHeight: '1.5',
    fontFamily: 'inherit',
  };

  const chevronBaseStyle = {
    flexShrink: 0,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1',
    transition: 'background-color 0.2s, transform 0.2s',
  };

  const answerBaseStyle = {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  };

  return (
    <section id="faq" style={sectionStyle} aria-label="FAQ section">
      <div style={getContainerStyle(currentTheme)}>
        <div style={headerStyle}>
          <span style={labelStyle}>FAQ</span>
          <h2 style={{ ...getHeadingStyle(currentTheme), margin: '0 0 16px 0' }}>{t.title}</h2>
          <p style={{ ...getSubheadingStyle(currentTheme), margin: '0 auto', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={listStyle}>
          {t.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  ...itemBaseStyle,
                  border: `1px solid ${isOpen ? currentTheme.primary : currentTheme.border}`,
                }}
              >
                <button
                  style={{
                    ...questionBaseStyle,
                    fontWeight: isOpen ? '700' : '600',
                  }}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen ? 'true' : 'false'}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.q}</span>
                  <span
                    style={{
                      ...chevronBaseStyle,
                      backgroundColor: isOpen ? currentTheme.primary : currentTheme.surface,
                      border: `1px solid ${isOpen ? currentTheme.primary : currentTheme.border}`,
                      color: isOpen ? '#fff' : currentTheme.textSecondary,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  style={{
                    ...answerBaseStyle,
                    maxHeight: isOpen ? '300px' : '0',
                    padding: isOpen ? '0 24px 18px 24px' : '0 24px',
                  }}
                  role="region"
                  aria-hidden={isOpen ? 'false' : 'true'}
                >
                  <p style={{ ...getBodyTextStyle(currentTheme), fontSize: '14px', lineHeight: '1.7' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
