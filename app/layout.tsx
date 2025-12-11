import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '발롱드파리 - 제품 등록',
  description: '발롱드파리 제품 등록을 시작하세요',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}


