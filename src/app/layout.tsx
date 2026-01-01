import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '로켓콜 - 프랜차이즈 가맹점 모집 전문 TM 서비스',
  description: '프랜차이즈 본사를 위한 확정 고객 약속 전문 TM 서비스. 확정된 고객만 보내드립니다.',
  keywords: '프랜차이즈, 가맹점 모집, TM, 텔레마케팅, 약속콜, 로켓콜, 가맹 상담',
  openGraph: {
    title: '로켓콜 - 프랜차이즈 가맹점 모집 전문',
    description: '확정된 고객만 보내드립니다. 프랜차이즈 본사를 위한 전문 TM 서비스',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
