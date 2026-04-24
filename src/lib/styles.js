// Reusable style functions — each accepts `theme` as parameter
// Theme properties: background, surface, text, textSecondary, primary, secondary, border, cardBg, navBg
// Spacing system: 8 / 16 / 24 / 32 / 48 / 64px

export function getContainerStyle(theme) {
  return {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 16px",
    width: "100%",
    boxSizing: "border-box",
  };
}

export function getSectionStyle(theme) {
  return {
    backgroundColor: theme.background,
    padding: "64px 0",
    width: "100%",
  };
}

export function getNavStyle(theme) {
  return {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: theme.navBg,
    borderBottom: `1px solid ${theme.border}`,
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    padding: "0 24px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
}

export function getNavLinkStyle(theme) {
  return {
    color: theme.text,
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    padding: "8px 0",
    transition: "color 0.2s",
    cursor: "pointer",
  };
}

export function getButtonStyle(theme) {
  return {
    backgroundColor: theme.primary,
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    padding: "14px 32px",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
    transition: "opacity 0.2s, transform 0.1s",
    lineHeight: "1",
  };
}

export function getButtonSecondaryStyle(theme) {
  return {
    backgroundColor: "transparent",
    color: theme.text,
    border: `2px solid ${theme.border}`,
    borderRadius: "4px",
    padding: "12px 32px",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
    transition: "border-color 0.2s, color 0.2s",
    lineHeight: "1",
  };
}

export function getCardStyle(theme) {
  return {
    backgroundColor: theme.cardBg,
    border: `1px solid ${theme.border}`,
    borderRadius: "12px", // Lebih membulat untuk kesan modern
    padding: "24px",
    boxSizing: "border-box",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
    height: "100%", // Memastikan tinggi kartu sama dalam satu baris grid
    display: "flex",
    flexDirection: "column",
  };
}

export function getHeadingStyle(theme) {
  return {
    color: theme.text,
    fontSize: "36px",
    fontWeight: "800",
    letterSpacing: "-0.02em",
    lineHeight: "1.15",
    margin: "0 0 16px 0",
  };
}

export function getSubheadingStyle(theme) {
  return {
    color: theme.textSecondary,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.6",
    margin: "0 0 48px 0",
  };
}

export function getBodyTextStyle(theme) {
  return {
    color: theme.textSecondary,
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "1.7",
    margin: "0",
  };
}

export function getGridStyle(cols) {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: "24px",
  };
}

export function getFlexStyle({
  direction = "row",
  align = "center",
  justify = "flex-start",
  gap = 0,
} = {}) {
  return {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap: typeof gap === "number" ? `${gap}px` : gap,
  };
}

export function getInputStyle(theme) {
  return {
    backgroundColor: theme.surface,
    color: theme.text,
    border: `1px solid ${theme.border}`,
    borderRadius: "4px",
    padding: "12px 16px",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };
}

export function getTextareaStyle(theme) {
  return {
    backgroundColor: theme.surface,
    color: theme.text,
    border: `1px solid ${theme.border}`,
    borderRadius: "4px",
    padding: "12px 16px",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };
}

export function getBadgeStyle(theme) {
  return {
    display: "inline-block",
    backgroundColor: theme.primary,
    color: "#FFFFFF",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: "2px",
    lineHeight: "1.4",
  };
}
