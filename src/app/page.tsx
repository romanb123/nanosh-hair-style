import Logo from "./components/Logo";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <a href="#" className="nav-logo" aria-label="Nanosh Hair Style">
          <Logo size={36} variant="full" />
        </a>
        <ul className="nav-links">
          <li><a href="#about">אודות</a></li>
          <li><a href="#products">חנות</a></li>
          <li><a href="#contact">צור קשר</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />

        {/* Flowing hair strand SVG — the signature element */}
        <svg
          className="hero-strands"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            className="strand strand-1"
            d="M-80 900 C 120 700, 80 500, 220 380 C 360 260, 500 340, 580 200 C 660 60, 600 -20, 780 -40"
            stroke="#C8A97E" strokeWidth="1.2" strokeOpacity="0.5" fill="none"
          />
          <path
            className="strand strand-2"
            d="M 1520 -60 C 1320 80, 1360 280, 1240 380 C 1120 480, 980 420, 900 560 C 820 700, 860 820, 720 920"
            stroke="#C8A97E" strokeWidth="0.9" strokeOpacity="0.35" fill="none"
          />
          <path
            className="strand strand-3"
            d="M 200 -40 C 160 140, 260 240, 180 400 C 100 560, -60 580, 20 760 C 80 900, 240 880, 200 1020"
            stroke="#9B5E7A" strokeWidth="0.8" strokeOpacity="0.4" fill="none"
          />
          <path
            className="strand strand-4"
            d="M 1300 920 C 1360 740, 1220 680, 1300 520 C 1380 360, 1520 340, 1440 180 C 1360 20, 1200 40, 1240 -80"
            stroke="#C8A97E" strokeWidth="0.7" strokeOpacity="0.28" fill="none"
          />
          <path
            className="strand strand-5"
            d="M 600 980 C 580 800, 680 720, 620 560 C 560 400, 400 380, 460 200 C 520 20, 700 -10, 660 -120"
            stroke="#E2CC9F" strokeWidth="1.0" strokeOpacity="0.22" fill="none"
          />
          <path
            className="strand strand-6"
            d="M 900 -80 C 920 100, 820 180, 880 320 C 940 460, 1100 480, 1040 640 C 980 800, 820 820, 860 960"
            stroke="#9B5E7A" strokeWidth="0.6" strokeOpacity="0.3" fill="none"
          />
        </svg>

        <div className="hero-content">
          <div className="reveal reveal-1 hero-logo-mark">
            <Logo size={72} variant="mark" />
          </div>
          <p className="reveal reveal-2 hero-eyebrow">TEL AVIV · SINCE 2020</p>
          <h1 className="reveal reveal-3 hero-title">
            <em>Nanosh</em><br />
            Hair Style
          </h1>
          <p className="reveal reveal-4 hero-tagline">
            בואי לגלות סטייל אישי ומראה מרענן
          </p>
          <a href="#products" className="reveal reveal-4 hero-cta" style={{animationDelay: "3.2s"}}>
            לחנות שלנו
          </a>
        </div>

        <div className="scroll-hint">
          <span>גלול</span>
          <div className="scroll-tick" />
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="about-section">
          <div className="about-deco" aria-hidden="true">N</div>
          <div>
            <p className="about-tag">אודות · ABOUT US</p>
            <h2 className="about-heading">
              פאות ותוספות שיער<br />שנועדו בדיוק בשבילך
            </h2>
            <div className="rule" />
            <p className="about-body">
              אני כאן כדי לעזור לך למצוא את המראה המדויק עבורך.
              אנחנו מציעות מגוון רחב של פאות ותוספות שיער באיכות גבוהה,
              עם שירות אישי וחם, ובמחירים תחרותיים.
              כל מוצר נבחר בקפידה כדי שתרגישי בטוחה, יפה ועצמאית.
            </p>
            <div className="about-stats">
              <div>
                <div className="stat-val">100%</div>
                <div className="stat-lbl">שיער טבעי</div>
              </div>
              <div>
                <div className="stat-val">6+</div>
                <div className="stat-lbl">שנות ניסיון</div>
              </div>
              <div>
                <div className="stat-val">∞</div>
                <div className="stat-lbl">עיצובים זמינים</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products-section">
        <div className="products-inner">
          <div className="section-hdr">
            <h2 className="section-title">הקולקציה שלנו</h2>
            <span className="section-sub">NEW ARRIVALS</span>
          </div>

          <div className="products-grid">
            {/* Card 1 */}
            <div className="product-card">
              <div className="product-img">
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-icon">
                  <path d="M40 10 C20 10 10 30 12 55 C14 80 25 100 40 110 C55 100 66 80 68 55 C70 30 60 10 40 10Z" stroke="#C8A97E" strokeWidth="1.5" fill="none"/>
                  <path d="M40 10 C38 30 30 50 28 75" stroke="#C8A97E" strokeWidth="1" strokeOpacity="0.6" fill="none"/>
                  <path d="M40 10 C42 30 50 50 52 75" stroke="#C8A97E" strokeWidth="1" strokeOpacity="0.6" fill="none"/>
                  <path d="M15 45 C25 43 35 48 45 43 C55 38 65 42 68 45" stroke="#C8A97E" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
                </svg>
              </div>
              <div className="product-info">
                <div className="product-name">תוספות שיער טבעי</div>
                <div className="product-price">₪400</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="product-card">
              <div className="product-img">
                <span className="product-badge">חדש</span>
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-icon">
                  <ellipse cx="40" cy="35" rx="22" ry="25" stroke="#C8A97E" strokeWidth="1.5" fill="none"/>
                  <path d="M18 35 C16 65 22 95 40 110 C58 95 64 65 62 35" stroke="#C8A97E" strokeWidth="1.2" fill="none"/>
                  <path d="M40 60 C32 65 28 80 30 95" stroke="#C8A97E" strokeWidth="0.8" strokeOpacity="0.5" fill="none"/>
                  <path d="M40 60 C48 65 52 80 50 95" stroke="#C8A97E" strokeWidth="0.8" strokeOpacity="0.5" fill="none"/>
                </svg>
              </div>
              <div className="product-info">
                <div className="product-name">פאה שוודית יוקרתית</div>
                <div className="product-price">₪1,200</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="product-card">
              <div className="product-img">
                <span className="product-badge">חדש</span>
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-icon">
                  <path d="M40 8 C38 20 36 32 38 44 C40 56 42 68 40 80 C38 92 34 104 36 116" stroke="#C8A97E" strokeWidth="1.5" fill="none"/>
                  <path d="M40 8 C32 14 28 22 32 32 C36 42 44 48 40 58 C36 68 28 74 32 84 C36 94 44 100 40 110" stroke="#C8A97E" strokeWidth="1" strokeOpacity="0.6" fill="none"/>
                  <path d="M40 8 C48 14 52 22 48 32 C44 42 36 48 40 58 C44 68 52 74 48 84 C44 94 36 100 40 110" stroke="#C8A97E" strokeWidth="1" strokeOpacity="0.6" fill="none"/>
                  <path d="M25 20 C30 25 35 22 40 26 C45 30 50 27 55 32" stroke="#C8A97E" strokeWidth="0.7" strokeOpacity="0.4" fill="none"/>
                </svg>
              </div>
              <div className="product-info">
                <div className="product-name">פאה עם תסרוקת קלועה</div>
                <div className="product-price">₪1,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-section">
          <div>
            <h2 className="contact-heading">
              בואי<br />
              נדבר
            </h2>
            <p className="contact-intro">
              רוצה לשמוע עוד על המוצרים שלנו, לקבוע פגישת ייעוץ,
              או פשוט לשאול שאלה? אנחנו כאן בשבילך.
            </p>

            <div className="contact-items" style={{ marginTop: "2.5rem" }}>
              <div className="contact-item">
                <div className="ci-label">אימייל</div>
                <div className="ci-value">
                  <a href="mailto:ilanit00777@gmail.com">ilanit00777@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-label">טלפון</div>
                <div className="ci-value">
                  <a href="tel:9997777000">999-7777-000</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-label">מיקום</div>
                <div className="ci-value">תל אביב, ישראל</div>
              </div>
              <div className="contact-item">
                <div className="ci-label">שעות פעילות</div>
                <div className="ci-value">ראשון–שישי, 08:00–19:00</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Logo size={32} variant="mark" />
        <span className="footer-copy">© 2026 כל הזכויות שמורות</span>
      </footer>
    </>
  );
}
