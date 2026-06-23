"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav>
      <a href="#" className="nav-logo" aria-label="Nanosh Hair Style" onClick={close}>
        <Logo size={36} variant="full" />
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><a href="#about">אודות</a></li>
        <li><a href="#products">חנות</a></li>
        <li><a href="#contact">צור קשר</a></li>
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? "סגור תפריט" : "פתח תפריט"}
        aria-expanded={open}
      >
        <span className={`nav-hamburger-line${open ? " open" : ""}`} />
        <span className={`nav-hamburger-line${open ? " open" : ""}`} />
        <span className={`nav-hamburger-line${open ? " open" : ""}`} />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer" role="dialog" aria-label="תפריט ניווט">
          <ul className="nav-drawer-links" onClick={close}>
            <li><a href="#about">אודות</a></li>
            <li><a href="#products">חנות</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </div>
      )}

      {/* Backdrop */}
      {open && (
        <div className="nav-backdrop" onClick={close} aria-hidden="true" />
      )}
    </nav>
  );
}
