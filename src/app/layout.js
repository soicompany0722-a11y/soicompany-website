import Image from "next/image";
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
  description:
    "SOI Company는 병원 마케팅, 병원 홍보, 병원광고, 병원 컨텐츠, 클리닉 브랜딩 등 전문 서비스를 제공합니다",
  keywords: [
    "소이컴퍼니",
    "soi company",
    "병원",
    "병원 마케팅",
    "병의원 마케팅",
    "동탄 마케팅",
    "병원 홍보",
    "병원 광고",
    "병원 홈페이지",
    "병원 홈페이지 제작",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1440px] mx-auto overflow-x-hidden scroll-j scroll-smooth`}
      >
        <header className="bg-[#005432] rounded-bl-[150px] md:rounded-bl-[250px]">
          <div className="header-top-area flex flex-col md:flex-row justify-between px-2.5 py-5 lg:px-24">
            <div className="mb-2 md:mb-0">
              <h1 className="sr-only">소이컴퍼니 (SOI company)</h1>
              <Image
                src="/main-logo-w.png"
                alt="소이컴퍼니 로고"
                width={180}
                height={38}
                priority
              />
            </div>
            <nav className="text-white">
              <ul className="flex gap-3 text-sm md:text-base">
                <a href="#about" className="p-1 cursor-pointer">
                  소이컴퍼니 소개
                </a>
                <a href="#marketing" className="p-1 cursor-pointer">
                  컨텐츠 마케팅
                </a>
                <a href="#test" className="p-1 cursor-pointer">
                  협력업체
                </a>
                <a href="#about" className="p-1 cursor-pointer">
                  상담
                </a>
              </ul>
            </nav>
          </div>

          <article className="flex px-8 lg:px-24 pt-8 pb-[70px] md:py-[70px] justify-between items-center">
            <div className="text-white flex flex-col justify-around">
              <h2 className="text-4xl md:text-4xl lg:text-5l font-bold md:leading-[64px] mb-4">
                병원의 가능성을 <br /> 디자인하는 파트너.
              </h2>
              <h2 className="text-2xl break-keep">
                브랜팅부터 콘텐츠까지, 마케팅의 본질을 짚습니다.
              </h2>
            </div>
            <Image
              src="/head-img.png"
              alt="소이컴퍼니 로고"
              className="hidden md:block w-96 h-96"
              width={180}
              height={38}
              priority
            />
          </article>
        </header>

        {children}

        <footer className="bg-[#005432] py-5 px-3 text-white text-center">
          <p className="mb-2">
            <strong>소이컴퍼니</strong>
          </p>
          <span>대표자: 최지훈</span>
          <p>사업자등록번호: 421-28-01480</p>
          <address>
            주소: 경기도 화성시 동탄중심상가1길 35, 3층 301호 커넥티드워크
            A15호(반송동, 한솔플라자)
          </address>
          <p>문의메일: bubbachucks@naver.com</p>
        </footer>
      </body>
    </html>
  );
}
