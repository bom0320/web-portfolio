# Folder Structure

이 프로젝트는 스크롤 기반 원페이지 포트폴리오이며,
Stage → Scene → Feature Component → Animation Controller 구조를 기준으로 구성한다.

---

## Main Structure

```txt
src/
├─ animations/
├─ app/
├─ assets/
├─ components/
├─ data/
├─ hooks/
├─ lib/
├─ providers/
└─ styles/
```

---

## app/

Next.js App Router 엔트리 영역이다.

```txt
app/
├─ api/
├─ capability/
├─ icon.png
├─ layout.tsx
├─ opengraph-image.png
└─ page.tsx
```

### Responsibilities

- 페이지 라우팅
- 전역 레이아웃 구성
- 메타 이미지 관리
- API route 관리
- 프로젝트 상세 페이지 라우트 관리

---

## components/

화면을 구성하는 React 컴포넌트를 관리한다.

```txt
components/
├─ stages/
├─ scenes/
├─ features/
└─ shared/
```

---

### stages/

스크롤 흐름을 제어하는 큰 단위이다.

Examples:

```txt
IntroStage
CapabilityStage
ContactStage
```

Stage는 여러 Scene을 묶고, 해당 구간의 스크롤 흐름을 연결한다.

---

### scenes/

Stage 안에서 하나의 시각적 구간을 구성하는 단위이다.

Examples:

```txt
HeroScene
LifeMotionScene
CapabilityIntroScene
ExperienceCapabilityScene
CapabilityNavigatorScene
ContactIntroScene
```

Scene은 화면 구조와 시각적 구성을 담당한다.

---

### features/

Scene 내부에서 사용되는 기능성 UI 단위이다.

Examples:

```txt
SkillCarousel
ProjectMonitor
ProjectList
ContactForm
```

Feature Component는 재사용 가능한 UI와 단일 기능을 담당한다.

---

### shared/

여러 영역에서 공통으로 사용되는 UI 또는 시스템 컴포넌트를 관리한다.

Examples:

```txt
Header
Button
Modal
SmoothScrollProvider
```

---

## animations/

GSAP, ScrollTrigger 기반 애니메이션 컨트롤러를 관리한다.

```txt
animations/
├─ intro/
├─ about/
├─ capability/
├─ contact/
└─ transitions/
```

### Responsibilities

- GSAP timeline 구성
- ScrollTrigger progress에 따른 animation 제어
- Scene transition 관리
- 초기 상태 설정
- destroy cleanup 처리

Animation 파일은 React 렌더링을 담당하지 않는다.

---

## data/

화면에 표시되는 정적 콘텐츠 데이터를 관리한다.

Examples:

```txt
CAPABILITY_NAVIGATOR_ITEMS
LIFE_MOTION_ITEMS
CONTACT_INTRO_CONTENT
```

긴 텍스트, 프로젝트 목록, 반복 렌더링 데이터는 컴포넌트 내부에 직접 작성하지 않고 data 파일로 분리한다.

---

## hooks/

Stage 또는 Feature에서 사용하는 React hook을 관리한다.

Examples:

```txt
useIntroStageAnimation
useCapabilityStageAnimation
useContactStageAnimation
useContactForm
```

Hook은 React lifecycle과 animation controller 연결을 담당한다.

---

## lib/

프로젝트 전역 유틸리티를 관리한다.

Examples:

```txt
lib/gsap
```

GSAP plugin 등록, ScrollTrigger 생성, refresh helper 같은 공통 유틸을 포함한다.

---

## providers/

앱 전역 시스템을 관리한다.

Examples:

```txt
SmoothScrollProvider
```

Lenis, global scroll update, app-level provider를 이 영역에서 관리한다.

---

## styles/

SCSS 스타일을 관리한다.

스타일 작성 기준은 다음과 같다.

- BEM 기반 클래스명 사용
- `@import` 기반 파일 연결
- nesting 지양
- `.js-*` 클래스는 스타일이 아닌 animation target 용도로만 사용
