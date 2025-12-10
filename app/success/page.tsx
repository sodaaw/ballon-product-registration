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
            <p className="text-body-sm text-brand-gray-500 mt-4">
              원하시면 아래에서 바로 인쇄하실 수 있습니다.
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
                      <div className="flex items-center gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check1"
                        />
                        <label htmlFor="check1" className="text-body text-brand-dark cursor-pointer" style={{ lineHeight: '1.8' }}>
                          직사광선을 피해 보관하기
                        </label>
                      </div>
                      <div className="flex items-center gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check2"
                        />
                        <label htmlFor="check2" className="text-body text-brand-dark cursor-pointer" style={{ lineHeight: '1.8' }}>
                          정기적으로 가죽 크림으로 관리하기
                        </label>
                      </div>
                      <div className="flex items-center gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check3"
                        />
                        <label htmlFor="check3" className="text-body text-brand-dark cursor-pointer" style={{ lineHeight: '1.8' }}>
                          습기 많은 곳은 피하기
                        </label>
                      </div>
                      <div className="flex items-center gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large"
                          id="check4"
                        />
                        <label htmlFor="check4" className="text-body text-brand-dark cursor-pointer" style={{ lineHeight: '1.8' }}>
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
                    <p className="text-body text-brand-gray-600 mb-4 leading-relaxed">
                      지금으로부터 100년 전, 발롱드파리 창립자 루이 가렐은 현악기 제작 장인의 가문에서 탄생한 바이올린 공방을 설립했다. 원통형의 독립 사운드 튜브를 이어 붙인 듯한 둥근 디자인이 특징인 이 스피커는 바이올린 선율을 느끼기 제격이다.
                    </p>
                    <div className="bg-gradient-to-br from-brand-primary/5 to-brand-gold/5 rounded-lg p-6 space-y-4">
                      <div className="space-y-2" style={{ lineHeight: '1.8' }}>
                        <div className="text-body-lg font-medium text-brand-dark">
                          PLAY WITH BOMSORI KIM
                        </div>
                        <div className="text-body text-brand-gray-600">
                          Tchaikovsky: The Nutcracker
                        </div>
                        <p className="text-body-sm text-brand-gray-500 mt-2" style={{ lineHeight: '1.8' }}>
                          바이올리니스트 김봄소리가 연주한 차이콥스키 &lt;호두까기 인형&gt; 바이올린 협주곡을 감상해보길. 바이올린이 이렇게나 다채로운 음을 지녔다는 걸 느낄 수 있게 된다.
                        </p>
                      </div>
                      <a
                        href="https://youtu.be/yk-gfjafvM8?si=MqiFyT0cQKNCX8Wn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-brand-primary text-white font-medium text-body-lg px-6 py-3 rounded-lg min-h-[48px] transition-all duration-200 hover:bg-brand-primaryDark active:scale-[0.98] shadow-md"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube에서 듣기
                      </a>
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

