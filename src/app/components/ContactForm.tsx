"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formsubmit.co/ajax/ilanit00777@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone || "לא צוין",
          message: form.message,
          _subject: `פנייה חדשה מהאתר - ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label className="field-label" htmlFor="name">שם מלא *</label>
          <input
            id="name"
            name="name"
            type="text"
            className="field-input"
            placeholder="שם מלא"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="phone">טלפון</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="field-input"
            placeholder="050-0000000"
            value={form.phone}
            onChange={handleChange}
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="field">
        <label className="field-label" htmlFor="message">הודעה *</label>
        <textarea
          id="message"
          name="message"
          className="field-input field-textarea"
          placeholder="במה נוכל לעזור לך?"
          value={form.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          rows={4}
        />
      </div>

      {status === "success" && (
        <div className="form-feedback form-success">
          ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
        </div>
      )}
      {status === "error" && (
        <div className="form-feedback form-error">
          שגיאה בשליחה — נסי שנית או פני אלינו ישירות במייל.
        </div>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "שולח..." : "שלח הודעה"}
      </button>
    </form>
  );
}
