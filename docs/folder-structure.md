# Folder Structure

이 프로젝트는 스크롤 기반 원페이지 포트폴리오이며,
Stage → Scene → Feature Component 구조를 기준으로 구성한다.

애니메이션 구현은 Animation Controller에,
DOM 탐색은 Scene DOM Helper에,
ScrollTrigger orchestration은 Stage Hook에 분리한다.

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
├─ projects/
│  └─ [id]/
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

프로젝트 상세 페이지는 다음 경로를 사용한다.

```txt
/projects/[id]
```

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

스크롤 흐름을 구성하는 가장 큰 화면 단위이다.

```txt
stages/
├─ IntroStage.tsx
├─ BuildStage.tsx
├─ ProjectsStage.tsx
├─ ContactStage.tsx
├─ constants/
├─ hooks/
└─ index.ts
```

Examples:

```txt
IntroStage
BuildStage
ProjectsStage
ContactStage
```

Stage는 여러 Scene을 묶고 해당 구간의 Hook을 연결한다.

---

### stages/hooks/

Stage와 ScrollTrigger, Animation Controller를 연결한다.

```txt
hooks/
├─ useIntroStageAnimation.ts
├─ useBuildStageAnimation.ts
├─ useProjectsStageAnimation.ts
├─ useContactStageAnimation.ts
└─ helpers/
   ├─ build/
   └─ projects/
```

Build helper:

```txt
helpers/build/
├─ buildStageControllers.ts
└─ buildStageElements.ts
```

Projects helper:

```txt
helpers/projects/
├─ projectsStageControllers.ts
└─ projectsStageElements.ts
```

Stage Hook은 긴 animation timeline을 직접 소유하지 않는다.

---

### scenes/

Stage 안에서 하나의 시각적 구간을 구성한다.

```txt
scenes/
├─ intro/
├─ build/
│  ├─ BuildIntroScene.tsx
│  ├─ BuildExperienceScene.tsx
│  └─ dom/
│     ├─ intro/
│     └─ experience/
├─ projects/
│  ├─ ProjectsNavigatorScene.tsx
│  ├─ ProjectsClosingScene.tsx
│  └─ dom/
│     ├─ navigator/
│     └─ closing/
└─ contact/
```

Scene은 JSX 구조와 Feature Component 조합을 담당한다.

---

### scenes/build/dom/

Build Scene의 애니메이션 대상 DOM 요소를 수집한다.

```txt
dom/
├─ intro/
│  ├─ buildIntro.element.ts
│  ├─ buildIntro.selectors.ts
│  └─ index.ts
└─ experience/
   ├─ buildExperience.element.ts
   ├─ buildExperience.selectors.ts
   └─ index.ts
```

---

### scenes/projects/dom/

Projects Scene의 애니메이션 대상 DOM 요소를 수집한다.

```txt
dom/
├─ navigator/
│  ├─ projectsNavigator.element.ts
│  ├─ projectsNavigator.selectors.ts
│  └─ index.ts
└─ closing/
   ├─ projectsClosing.element.ts
   ├─ projectsClosing.selectors.ts
   └─ index.ts
```

---

### features/

Scene 내부에서 사용되는 기능성 UI 단위를 관리한다.

```txt
features/
├─ build/
│  ├─ intro/
│  └─ experience/
│     ├─ structure/
│     ├─ ai/
│     └─ visual/
├─ projects/
│  ├─ navigator/
│  └─ closing/
├─ contact/
└─ ...
```

Build feature examples:

```txt
BuildStructureBlock
BuildStructureGrid
BuildStructureMap
BuildAIBlock
BuildVisualBlock
BuildVisualGallery
BuildVisualCard
IntroPinnedNarrative
IntroVisualProof
```

Projects feature examples:

```txt
ProjectsNavigatorIntro
ProjectsNavigatorList
ProjectsNavigatorMonitor
ProjectsClosingStatement
ProjectsClosingScrollCue
ProjectDetailHero
ProjectDetailGallery
```

---

### shared/

여러 영역에서 공통으로 사용하는 UI 또는 시스템 컴포넌트를 관리한다.

Examples:

```txt
Header
Button
Modal
GradientText
SmoothScrollProvider
```

---

## animations/

GSAP 기반 Animation Controller를 관리한다.

```txt
animations/
├─ _shared/
├─ intro/
├─ build/
│  ├─ intro/
│  │  ├─ buildIntro.animation.ts
│  │  ├─ buildIntroProof.animation.ts
│  │  └─ index.ts
│  └─ experience/
│     ├─ buildStructure.animation.ts
│     ├─ buildAI.animation.ts
│     ├─ buildVisual.animation.ts
│     └─ index.ts
├─ projects/
│  ├─ navigator/
│  │  ├─ projectsNavigator.animation.ts
│  │  └─ index.ts
│  └─ closing/
│     ├─ projectsClosing.animation.ts
│     └─ index.ts
├─ contact/
└─ transitions/
```

### Responsibilities

- GSAP timeline 구성
- 초기 animation state 설정
- progress 기반 animation 제어
- destroy cleanup 처리

Animation 파일은 다음을 담당하지 않는다.

- React 렌더링
- ScrollTrigger 등록
- DOM selector 정의
- 콘텐츠 데이터 관리

---

## assets/

정적 asset 경로 helper를 관리한다.

```txt
assets/
├─ buildImages.ts
├─ projectsImages.ts
└─ ...
```

`buildImages.ts`:

```txt
/images/build
```

`projectsImages.ts`:

```txt
/images/projects
```

Build와 Projects 이미지 경로 규칙을 서로 분리해 관리한다.

---

## data/

화면에 표시되는 정적 콘텐츠 데이터를 관리한다.

```txt
data/
├─ build/
│  ├─ intro/
│  └─ experience/
├─ projects/
│  └─ projectItems.ts
├─ contacts.ts
└─ ...
```

Examples:

```txt
BUILD_INTRO_PROOF_POINTS
BUILD_STRUCTURE_ITEMS
BUILD_AI_ITEMS
BUILD_VISUAL_ITEMS
PROJECT_ITEMS
CONTACT_INTRO
```

긴 텍스트, 프로젝트 목록, 반복 렌더링 데이터는 컴포넌트 내부에 직접 작성하지 않고 data 파일로 분리한다.

---

## hooks/

여러 영역에서 공통으로 사용하는 React Hook을 관리한다.

Examples:

```txt
useSectionViewTracking
useContactForm
```

Stage 전용 애니메이션 Hook은 다음 위치에서 관리한다.

```txt
components/stages/hooks
```

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

```txt
styles/
├─ abstracts/
├─ base/
├─ features/
│  ├─ build/
│  │  ├─ intro/
│  │  └─ experience/
│  ├─ projects/
│  │  ├─ navigator/
│  │  └─ closing/
│  └─ ...
├─ layout/
├─ shared/
├─ stages/
└─ index.scss
```

스타일 작성 기준은 다음과 같다.

- BEM 기반 클래스명 사용
- `@import` 기반 파일 연결
- 과도한 nesting 지양
- `.js-*` 클래스는 animation target 용도로만 사용
- Build와 Projects style namespace 분리

Examples:

```txt
build-intro-*
build-experience-*
projects-navigator-*
project-detail-*
projects-closing-*
```

---

## public/images/

정적 이미지는 도메인별로 분리한다.

```txt
public/images/
├─ build/
│  └─ visual/
└─ projects/
   ├─ washer/
   ├─ nova/
   ├─ hyoit/
   ├─ portfolio/
   └─ monitor-frame.png
```
