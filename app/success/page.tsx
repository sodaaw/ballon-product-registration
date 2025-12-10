'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SuccessPage() {
  const router = useRouter();

  const handleDownload = (type: 'pdf' | 'jpg') => {
    // 실제로는 서버에서 파일을 다운로드하지만, 여기서는 시뮬레이션
    alert(`${type === 'pdf' ? 'PDF' : 'JPG'} 파일 다운로드가 시작됩니다.`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory to-white">
      {/* 헤더 */}
      <header className="w-full px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="font-logo text-title text-brand-primary text-center font-medium tracking-tight">
            Ballon de Paris
          </h1>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* 성공 메시지 */}
          <div className="text-center space-y-4 py-8">
            <div className="w-20 h-20 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-sans text-title text-brand-dark font-semibold">
              등록이 완료되었습니다!
            </h2>
            <p className="text-body-lg text-brand-gray-600">
              특별한 혜택을 확인해보세요
            </p>
          </div>

          {/* 리워드 카드들 */}
          <div className="space-y-4">
            {/* DIY 가죽 도안 다운로드 */}
            <Card hover className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-heading text-brand-dark mb-2 font-semibold">
                      DIY 가죽 도안
                    </h3>
                    <p className="text-body text-brand-gray-600 mb-4">
                      발롱드파리만의 특별한 가죽 도안을 다운로드하세요
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={() => handleDownload('pdf')}
                        className="flex-1"
                      >
                        PDF 다운로드
                      </Button>
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={() => handleDownload('jpg')}
                        className="flex-1"
                      >
                        JPG 다운로드
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 가죽 활용 체크리스트 */}
            <Card hover className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-heading text-brand-dark mb-2 font-semibold">
                      가죽 활용 체크리스트
                    </h3>
                    <p className="text-body text-brand-gray-600 mb-4">
                      가죽 제품을 오래 사용하기 위한 관리 팁
                    </p>
                    <div className="bg-brand-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check1"
                        />
                        <label htmlFor="check1" className="text-body text-brand-dark cursor-pointer">
                          직사광선을 피해 보관하기
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check2"
                        />
                        <label htmlFor="check2" className="text-body text-brand-dark cursor-pointer">
                          정기적으로 가죽 크림으로 관리하기
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check3"
                        />
                        <label htmlFor="check3" className="text-body text-brand-dark cursor-pointer">
                          습기 많은 곳은 피하기
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check4"
                        />
                        <label htmlFor="check4" className="text-body text-brand-dark cursor-pointer">
                          부드러운 천으로 먼지 제거하기
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 추천 음악 플레이리스트 */}
            <Card hover className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-heading text-brand-dark mb-2 font-semibold">
                      추천 음악 플레이리스트
                    </h3>
                    <p className="text-body text-brand-gray-600 mb-4">
                      발롱드파리와 함께 즐기기 좋은 음악들
                    </p>
                    <div className="bg-gradient-to-br from-brand-primary/5 to-brand-gold/5 rounded-lg p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="text-body-lg font-medium text-brand-dark">
                          클래식 모음
                        </div>
                        <div className="text-body text-brand-gray-600">
                          Debussy, Chopin, Satie
                        </div>
                      </div>
                      <div className="h-px bg-brand-gray-200"></div>
                      <div className="space-y-2">
                        <div className="text-body-lg font-medium text-brand-dark">
                          재즈 모음
                        </div>
                        <div className="text-body text-brand-gray-600">
                          Bill Evans, Miles Davis, Chet Baker
                        </div>
                      </div>
                      <div className="h-px bg-brand-gray-200"></div>
                      <div className="space-y-2">
                        <div className="text-body-lg font-medium text-brand-dark">
                          보사노바 모음
                        </div>
                        <div className="text-body text-brand-gray-600">
                          Astrud Gilberto, Stan Getz, João Gilberto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* 액션 버튼들 */}
          <div className="space-y-3 pt-4 pb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={handlePrint}
              className="w-full"
            >
              페이지 인쇄하기
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push('/')}
              className="w-full"
            >
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="w-full px-6 py-6 border-t border-brand-gray-200">
        <p className="text-body-sm text-brand-gray-400 text-center">
          © 2024 Ballon de Paris. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

