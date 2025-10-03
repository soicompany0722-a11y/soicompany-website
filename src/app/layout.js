import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SOI company - 소이컴퍼니",
  description: "회사설명",
  keywords: ["소이컴퍼니", "soi company", "IT 솔루션", "서비스", "혁신"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <span>헤더</span>
        </header>
        {children}
        <footer>
          <span>푸터</span>
        </footer>
      </body>
    </html>
  );
}
