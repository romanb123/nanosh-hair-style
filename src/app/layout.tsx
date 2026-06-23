import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nanosh Hair Style | פאות ותוספות שיער",
  description: "בואי לגלות סטייל אישי ומראה מרענן. מגוון פאות ותוספות שיער באיכות גבוהה.",
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
