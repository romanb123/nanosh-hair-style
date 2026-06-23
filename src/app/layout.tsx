import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
