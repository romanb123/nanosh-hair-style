"use client";

import { useEffect, useState, useCallback } from "react";

type Settings = {
  fontSize: number; // 0=normal, 1=large, 2=xlarge
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
};

const DEFAULT: Settings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  bigCursor: false,
};

const STORAGE_KEY = "nanosh-a11y";

function applySettings(s: Settings) {
  const html = document.documentElement;
  // font size
  html.style.setProperty("--a11y-font-scale", s.fontSize === 0 ? "1" : s.fontSize === 1 ? "1.18" : "1.38");
  // toggles
  html.classList.toggle("a11y-high-contrast", s.highContrast);
  html.classList.toggle("a11y-grayscale", s.grayscale);
  html.classList.toggle("a11y-underline-links", s.underlineLinks);
  html.classList.toggle("a11y-big-cursor", s.bigCursor);
}

export default function Accessibility() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT);

  // Load from storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Settings;
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {}
  }, []);

  const save = useCallback((next: Settings) => {
    setSettings(next);
    applySettings(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }, []);

  const toggle = (key: keyof Settings) =>
    save({ ...settings, [key]: !settings[key as keyof Settings] });

  const changeFontSize = (delta: number) =>
    save({ ...settings, fontSize: Math.max(0, Math.min(2, settings.fontSize + delta)) });

  const reset = () => save(DEFAULT);

  // F10 shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "F10") { e.preventDefault(); setOpen((v) => !v); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const fontSizeLabel = ["רגיל", "גדול", "גדול מאוד"][settings.fontSize];

  return (
    <>
      {/* Floating trigger */}
      <button
        className="a11y-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label="פתח תפריט נגישות"
        aria-expanded={open}
        title="נגישות (F10)"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="4.5" r="1.8" fill="currentColor" />
          <path d="M12 7.5c-2.5 0-5 .8-5 .8l1 3.2 4-1 4 1 1-3.2s-2.5-.8-5-.8z" fill="currentColor" />
          <path d="M9.5 11.5L8 18l4-2 4 2-1.5-6.5" fill="currentColor" />
          <path d="M7.5 11.5l-2.5 4.5h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M16.5 11.5l2.5 4.5h-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="a11y-panel" role="dialog" aria-label="הגדרות נגישות" dir="rtl">
          <div className="a11y-panel-header">
            <span className="a11y-panel-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{marginLeft: "8px", flexShrink: 0}}>
                <circle cx="12" cy="4.5" r="1.8" fill="currentColor" />
                <path d="M12 7.5c-2.5 0-5 .8-5 .8l1 3.2 4-1 4 1 1-3.2s-2.5-.8-5-.8z" fill="currentColor" />
                <path d="M9.5 11.5L8 18l4-2 4 2-1.5-6.5" fill="currentColor" />
              </svg>
              הגדרות נגישות
            </span>
            <button className="a11y-close" onClick={() => setOpen(false)} aria-label="סגור">✕</button>
          </div>

          {/* Font size */}
          <div className="a11y-group">
            <div className="a11y-group-label">גודל טקסט</div>
            <div className="a11y-row">
              <button
                className="a11y-btn-icon"
                onClick={() => changeFontSize(-1)}
                aria-label="הקטן טקסט"
                disabled={settings.fontSize === 0}
              >
                <span style={{ fontSize: "14px", fontWeight: 600 }}>A</span>
                <span className="a11y-minus">−</span>
              </button>
              <span className="a11y-value">{fontSizeLabel}</span>
              <button
                className="a11y-btn-icon"
                onClick={() => changeFontSize(1)}
                aria-label="הגדל טקסט"
                disabled={settings.fontSize === 2}
              >
                <span style={{ fontSize: "18px", fontWeight: 600 }}>A</span>
                <span className="a11y-plus">+</span>
              </button>
            </div>
          </div>

          <div className="a11y-divider" />

          {/* Toggles */}
          <div className="a11y-group">
            <div className="a11y-group-label">תצוגה</div>
            <div className="a11y-toggles">
              <A11yToggle
                label="ניגודיות גבוהה"
                icon="◑"
                active={settings.highContrast}
                onClick={() => toggle("highContrast")}
              />
              <A11yToggle
                label="גווני אפור"
                icon="◻"
                active={settings.grayscale}
                onClick={() => toggle("grayscale")}
              />
              <A11yToggle
                label="הדגשת קישורים"
                icon="🔗"
                active={settings.underlineLinks}
                onClick={() => toggle("underlineLinks")}
              />
              <A11yToggle
                label="סמן גדול"
                icon="▲"
                active={settings.bigCursor}
                onClick={() => toggle("bigCursor")}
              />
            </div>
          </div>

          <div className="a11y-divider" />

          <div className="a11y-panel-footer">
            <button className="a11y-reset" onClick={reset}>איפוס כל ההתאמות</button>
            <span className="a11y-shortcut">קיצור: F10</span>
          </div>
        </div>
      )}

      {/* Overlay to close */}
      {open && <div className="a11y-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}

function A11yToggle({ label, icon, active, onClick }: { label: string; icon: string; active: boolean; onClick: () => void }) {
  return (
    <button className={`a11y-toggle${active ? " a11y-toggle--on" : ""}`} onClick={onClick} aria-pressed={active}>
      <span className="a11y-toggle-icon" aria-hidden="true">{icon}</span>
      <span className="a11y-toggle-label">{label}</span>
      <span className="a11y-toggle-pill">{active ? "פעיל" : "כבוי"}</span>
    </button>
  );
}
