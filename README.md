# 발롱드파리 (Ballon de Paris) - 제품 등록 웹사이트

시니어 타겟 고가 오브제 스피커 브랜드의 제품 등록 웹사이트입니다.

## 🎨 디자인 특징

- **시니어 친화적 UI**: 큰 텍스트, 큰 버튼(최소 56px), 단순한 플로우
- **브랜드 컬러**: #BB362F (세련된 레드)
- **고급스러운 타이포그래피**: Playfair Display (헤딩) + Pretendard (본문)
- **모바일 우선**: 375px 기준 반응형 디자인

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
uxcap/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts          # 제품 등록 API
│   ├── register/
│   │   └── page.tsx              # 제품 등록 페이지
│   ├── success/
│   │   └── page.tsx              # 등록 완료 페이지
│   ├── globals.css               # 전역 스타일
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 랜딩 페이지
├── components/
│   └── ui/
│       ├── Button.tsx            # 버튼 컴포넌트
│       ├── Input.tsx             # 입력 필드 컴포넌트
│       └── Card.tsx              # 카드 컴포넌트
├── package.json
├── tailwind.config.js            # Tailwind 설정
└── tsconfig.json
```

## 🎯 주요 기능

1. **랜딩 페이지**: 브랜드 소개 및 제품 등록 시작
2. **제품 등록 페이지**: 간단한 폼으로 제품 정보 입력
   - 시리얼 번호
   - 고객 성함
   - 전화번호 (자동 포맷팅)
   - 구매일
   - 구매처
3. **등록 완료 페이지**: 리워드 제공
   - DIY 가죽 도안 다운로드
   - 가죽 활용 체크리스트
   - 추천 음악 플레이리스트

## 🎨 디자인 시스템

### 컬러
- Primary: `#BB362F` (브랜드 레드)
- Gold: `#D4AF37` (보조 컬러)
- Ivory: `#F5F5DC` (배경)

### 타이포그래피
- 헤딩: Playfair Display (Serif)
- 본문: Pretendard (Sans-serif)

### 컴포넌트
- 버튼: 최소 높이 56px
- 입력 필드: 최소 높이 56px, 큰 텍스트
- 체크박스/라디오: 큰 사이즈 (24px)

## 📱 반응형

모바일 우선 디자인으로 375px 이상의 모든 화면 크기를 지원합니다.

