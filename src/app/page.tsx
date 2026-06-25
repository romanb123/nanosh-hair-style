import Logo from "./components/Logo";
import ContactForm from "./components/ContactForm";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/images/ayo-ogunseinde-UqT55tGBqzI-unsplash.jpg"
            alt=""
            aria-hidden="true"
            className="hero-bg-img"
          />
        </div>

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
      <section id="about" className="about-outer">
        <div className="about-image-col">
          <img
            src="/images/pexels-artbovich-7750124.jpg"
            alt="סלון Nanosh Hair Style"
            className="about-photo"
          />
        </div>
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
                <img src="/images/alexas_fotos-mannequins-1079925_1920.jpg" alt="תוספות שיער טבעי" className="product-photo" />
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
                <img src="/images/freestocks-rNPfyRYqjHY-unsplash.jpg" alt="פאה שוודית יוקרתית" className="product-photo" />
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
                <img src="/images/pexels-ian-1905462846-36785429.jpg" alt="פאה עם תסרוקת קלועה" className="product-photo" />
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
