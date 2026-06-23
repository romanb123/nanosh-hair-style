import type { Metadata } from "next";
import "./globals.css";
import Accessibility from "./components/Accessibility";

const siteUrl = "https://master.d1qv0srh4ln6z3.amplifyapp.com";

export const metadata: Metadata = {
  title: "Nanosh Hair Style | פאות ותוספות שיער",
  description: "בואי לגלות סטייל אישי ומראה מרענן. מגוון פאות ותוספות שיער באיכות גבוהה.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Nanosh Hair Style | פאות ותוספות שיער",
    description: "בואי לגלות סטייל אישי ומראה מרענן. מגוון פאות ותוספות שיער באיכות גבוהה.",
    url: siteUrl,
    siteName: "Nanosh Hair Style",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanosh Hair Style | פאות ותוספות שיער",
    description: "בואי לגלות סטייל אישי ומראה מרענן. מגוון פאות ותוספות שיער באיכות גבוהה.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
        <Accessibility />
        <a
          href="https://wa.me/972505751738"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שלחי הודעה בוואטסאפ"
          style={{
            position: "fixed",
            bottom: "1.8rem",
            right: "1.8rem",
            zIndex: 9999,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "#25D366",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            textDecoration: "none",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.845L.057 23.571a.5.5 0 0 0 .612.612l5.76-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.432l-.372-.22-3.853.993.999-3.763-.242-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
