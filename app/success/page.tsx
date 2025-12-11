'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SuccessPage() {
  const router = useRouter();
  const [isChecklistExpanded, setIsChecklistExpanded] = useState(false);

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
                    <div className="space-y-3">
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
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handlePrint}
                        className="w-full"
                      >
                        도안 인쇄하기
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
                    <p className="text-body text-brand-gray-600 mb-4 leading-relaxed" style={{ lineHeight: '1.8' }}>
                      발롱드파리의 스피커가 고유한 소리를 가진 것처럼, 여러분이 받은 가죽 조각도 세상에 하나뿐인 '유니크한 오브제'입니다. 등록을 완료하면, 당신의 조각이 어떤 가치를 가질 수 있는지 다양한 활용법을 안내해드려요. 하나씩 활용해보시면서 체크해가시면 더욱 즐거운 경험이 될 것입니다.
                    </p>
                    
                    {/* 더보기/접기 버튼 */}
                    <button
                      onClick={() => setIsChecklistExpanded(!isChecklistExpanded)}
                      className="w-full bg-brand-primary text-white font-semibold text-body-lg px-6 py-4 rounded-lg min-h-[56px] flex items-center justify-center gap-2 transition-all duration-200 hover:bg-brand-primaryDark active:scale-[0.98] shadow-md mb-4"
                    >
                      {isChecklistExpanded ? (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                          목록 접기
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          활용법 더보기
                        </>
                      )}
                    </button>

                    {/* 체크리스트 (조건부 렌더링) */}
                    {isChecklistExpanded && (
                      <div className="bg-brand-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check1"
                        />
                        <label htmlFor="check1" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">사운드 키링 (Sound Keyring)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">자신만의 형태를 살려 작은 구멍만 뚫어 키링으로 만들어보세요. 당신의 스피커와 연결된 '행운의 오브제'가 됩니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check2"
                        />
                        <label htmlFor="check2" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">미니 북마크 (Leather Bookmark)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">책 사이에 쏙 끼우면 하루의 분위기를 바꿔주는 북마크가 됩니다. 삐뚤한 모양일수록 더 유니크한 감성이 살아납니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check3"
                        />
                        <label htmlFor="check3" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">스피커 데코 태그 (Speaker Deco Tag)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">스피커 스탠드나 케이블 근처에 걸어두면 작은 오브제처럼 공간을 채워줍니다. 모양 그대로 두는 것이 매력 포인트!</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check4"
                        />
                        <label htmlFor="check4" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">케이블 네임 태그 (Cable Name Tag)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">전원선/충전선에 묶어 나만의 식별 태그로 활용하세요. 재단 없이도 슬릿만 하나 내면 완성됩니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check5"
                        />
                        <label htmlFor="check5" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">미니 코너 북커버 (Corner Bookmark)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">조각을 반 접어 모서리에 끼우면 감성적인 코너 북커버가 됩니다. 작은 조각일수록 더 잘 어울립니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check6"
                        />
                        <label htmlFor="check6" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">향수·디퓨저 밴드 (Scent Band)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">작은 병이나 방향제에 두르면 '발롱드파리 감성 밴드'가 됩니다. 길쭉한 가죽 조각과 찢어진 테두리도 그대로 멋입니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check7"
                        />
                        <label htmlFor="check7" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">책상 오브제 (Desk Object)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">특별한 가공 없이 책상 위에 올려두면 미니 오브제로 활용할 수 있어요. 매달 받은 가죽을 모아 컬렉션을 만들어보세요.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check8"
                        />
                        <label htmlFor="check8" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">케이블 고정 패치 (Cable Fix Patch)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">양면테이프만 붙이면 케이블이 흘러내리지 않는 작은 고정 패치가 됩니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check9"
                        />
                        <label htmlFor="check9" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">가방·파우치 내부 포켓 태그</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">가방 속 작은 포켓에 붙여 나만의 가죽 태그로 꾸며보세요. 비정형 모양일수록 '패치워크 감성'이 살아납니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check10"
                        />
                        <label htmlFor="check10" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">DIY 미니 자석 오브제</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">얇은 자석을 뒤에 붙이면 냉장고·철제 책상 어디든 붙는 미니 오브제가 돼요. 자투리의 모양 그대로가 디자인입니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check11"
                        />
                        <label htmlFor="check11" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">이어폰·케이블 래퍼 (Cord Wrapper)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">가죽을 반 접어 구멍 하나만 만들면 이어폰이나 케이블을 감는 래퍼가 됩니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check12"
                        />
                        <label htmlFor="check12" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">'오늘의 운세' 가죽 카드 (Lucky Leather Card)</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">받은 모양을 '곰돌이처럼 보이는 부분 찾아보기'처럼 해석해서 오늘의 운세 카드처럼 활용해보세요. 당신만의 파리지앵 행운 조각입니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check13"
                        />
                        <label htmlFor="check13" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">미니 사진 홀더</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">작은 홈만 내면 사진을 끼울 수 있는 스탠드가 됩니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check14"
                        />
                        <label htmlFor="check14" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">가죽 북스탠드 스티커</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">책상 위 작은 문진/미니 스탠드 느낌으로 세워둘 수 있어 공간에 조용한 포인트가 됩니다.</span>
                        </label>
                      </div>
                      <div className="flex items-start gap-3" style={{ lineHeight: '1.8' }}>
                        <input
                          type="checkbox"
                          className="checkbox-large mt-1"
                          id="check15"
                        />
                        <label htmlFor="check15" className="text-body text-brand-dark cursor-pointer flex-1" style={{ lineHeight: '1.8' }}>
                          <span className="font-semibold">스피커 설정 카드 홀더</span>
                          <br />
                          <span className="text-body-sm text-brand-gray-600">스피커 연결 가이드를 적어 끼워둘 수 있는 작은 카드 홀더로 사용하세요. 자투리 모양 그대로가 브랜드의 유니크함입니다.</span>
                        </label>
                      </div>
                    </div>
                    )}
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
                      지금으로부터 100년 전, 발롱드파리 창립자 루이 가렐은 현악기 제작 장인의 가문에서 탄생한 바이올린 공방을 설립했습니다. 원통형의 독립 사운드 튜브를 이어 붙인 듯한 둥근 디자인이 특징인 이 스피커는 바이올린 선율을 느끼기에 제격입니다.
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
                          바이올리니스트 김봄소리가 연주한 차이콥스키 &lt;호두까기 인형&gt; 바이올린 협주곡을 감상해보시기 바랍니다. 바이올린이 이렇게나 다채로운 음을 지녔다는 것을 느끼실 수 있으실 것입니다.
                        </p>
                        <p className="text-body-sm text-brand-primary mt-3 font-medium" style={{ lineHeight: '1.8' }}>
                          💡 위에서 다운로드하신 가죽 도안으로 무언가를 만드시는 동안 이 음악을 들으시면 더욱 즐거운 작업 시간이 되실 것입니다.
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
          <div className="pt-4 pb-8">
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

