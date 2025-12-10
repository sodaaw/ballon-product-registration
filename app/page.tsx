'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory to-white flex flex-col">
      {/* 헤더 */}
      <header className="w-full px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="font-logo text-display text-brand-primary text-center mb-2 font-medium tracking-tight">
            Ballon de Paris
          </h1>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full"></div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-md w-full text-center space-y-8">
          {/* 메인 타이틀 */}
          <div className="space-y-4">
            <h2 className="font-sans text-title text-brand-dark leading-relaxed font-semibold">
              발롱드파리와의 여정,
              <br />
              지금 시작하세요.
            </h2>
            <p className="text-body-lg text-brand-gray-600 leading-relaxed">
              간단한 등록으로
              <br />
              특별한 혜택을 받아보세요
            </p>
          </div>

          {/* 데코레이션 요소 */}
          <div className="flex justify-center items-center gap-4 py-4">
            <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
            <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
            <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
          </div>

          {/* CTA 버튼 */}
          <div className="pt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push('/register')}
              className="w-full text-xl font-semibold shadow-xl"
            >
              제품 등록하기
            </Button>
          </div>

          {/* 안내 문구 */}
          <p className="text-body-sm text-brand-gray-500 pt-4">
            QR 코드로 접속하셨다면
            <br />
            위 버튼을 눌러 시작해주세요
          </p>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="w-full px-6 py-6">
        <p className="text-body-sm text-brand-gray-400 text-center">
          © 2024 Ballon de Paris. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

