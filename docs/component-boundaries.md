# Component Boundaries

이 문서는 포트폴리오 프로젝트에서 Stage, Scene, Feature Component, Shared Component, Stage Hook, DOM Helper, Animation Controller의 책임을 구분하기 위한 기준이다.

---

## Stage

Stage는 여러 Scene을 묶고 하나의 큰 스크롤 구간을 구성하는 단위이다.

Examples:

```txt
IntroStage
BuildStage
ProjectsStage
ContactStage
```

### Responsibilities

- Stage root ref 관리
- Scene 배치
- Stage 단위 상태 관리
- Stage Hook 연결
- 분석 이벤트 연결
- 구간별 section id 제공

### Should NOT

- 세부 UI를 직접 구현하지 않는다.
- 긴 콘텐츠 데이터를 직접 들고 있지 않는다.
- 개별 GSAP timeline을 직접 작성하지 않는다.
- 하위 DOM 요소를 직접 탐색하지 않는다.
- 모든 ScrollTrigger 설정을 Stage 컴포넌트 안에 작성하지 않는다.

### Example

```tsx
export default function BuildStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useBuildStageAnimation(stageRef);

  return (
    <section id="build" ref={stageRef} className="content-stage">
      <BuildIntroScene />
      <BuildExperienceScene />
    </section>
  );
}
```

---

## Scene

Scene은 Stage 내부에서 하나의 시각적 구간을 구성하는 단위이다.

Examples:

```txt
HeroScene
LifeMotionScene
BuildIntroScene
BuildExperienceScene
ProjectsNavigatorScene
ProjectsClosingScene
ContactIntroScene
```

### Responsibilities

- JSX 구조 구성
- 하위 Feature Component 조합
- 시각적 레이아웃 구성
- style class 제공
- animation target class 제공
- Stage에서 참조할 Scene root 제공

### Should NOT

- ScrollTrigger를 직접 등록하지 않는다.
- Stage 전체 progress를 직접 해석하지 않는다.
- GSAP timeline을 직접 생성하지 않는다.
- 프로젝트 전체 상태를 소유하지 않는다.

### Example

```tsx
export default function BuildExperienceScene() {
  return (
    <section className="build-experience-scene js-build-experience">
      <div className="build-experience-scene__inner">
        <BuildStructureBlock />
        <BuildAIBlock />
        <BuildVisualBlock />
      </div>
    </section>
  );
}
```

---

## Feature Component

Feature Component는 Scene 내부에서 사용되는 기능성 UI 단위이다.

Examples:

```txt
BuildStructureBlock
BuildStructureGrid
BuildStructureMap
BuildAIBlock
BuildVisualBlock
BuildVisualGallery
BuildVisualCard
ProjectsNavigatorList
ProjectsNavigatorMonitor
ProjectsNavigatorIntro
ProjectDetailHero
ProjectDetailGallery
ContactForm
```

### Responsibilities

- props 기반 UI 렌더링
- 단일 기능 처리
- 반복 UI 분리
- Scene 내부 가독성 개선
- 사용자 입력과 UI 상태 처리

### Should NOT

- Stage의 전체 스크롤 구조를 알지 않는다.
- 전체 페이지 흐름을 제어하지 않는다.
- ScrollTrigger를 직접 생성하지 않는다.
- Stage Animation Controller를 직접 생성하지 않는다.
- 다른 도메인의 데이터에 직접 의존하지 않는다.

---

## Shared Component

Shared Component는 여러 영역에서 공통으로 사용하는 UI 또는 시스템 단위이다.

Examples:

```txt
Header
Button
Modal
GradientText
SmoothScrollProvider
```

### Responsibilities

- 공통 UI 제공
- 전역 시스템 제공
- 중복 코드 감소
- 앱 전반에서 재사용 가능한 구조 제공

### Should NOT

- 특정 Stage에 강하게 의존하지 않는다.
- 특정 Scene 전용 애니메이션을 포함하지 않는다.
- 특정 Feature의 데이터 구조를 직접 알지 않는다.

---

## Stage Hook

Stage Hook은 React lifecycle과 스크롤 제어 로직을 연결한다.

Examples:

```txt
useIntroStageAnimation
useBuildStageAnimation
useProjectsStageAnimation
useContactStageAnimation
```

### Responsibilities

- Stage root ref 참조
- ScrollTrigger 등록
- progress 구간 해석
- Animation Controller 생성
- Controller의 `setProgress()` 호출
- resize와 refresh 처리
- cleanup 시 ScrollTrigger와 Controller 제거
- Stage 수준의 animation orchestration

### Should NOT

- 긴 GSAP timeline을 직접 작성하지 않는다.
- Scene JSX를 직접 생성하지 않는다.
- Feature Component의 UI 로직을 포함하지 않는다.
- querySelector 문자열을 여러 위치에 흩어 작성하지 않는다.

Stage Hook은 애니메이션을 구현하는 계층이 아니라,
스크롤과 Animation Controller를 연결하는 계층이다.

---

## DOM Helper

DOM Helper는 Scene 내부의 애니메이션 대상 요소를 수집한다.

Examples:

```txt
getBuildIntroAnimationElements
getBuildIntroProofAnimationElements
getBuildStructureAnimationElements
getBuildAIAnimationElements
getBuildVisualAnimationElements
getProjectsNavigatorIntroAnimationElements
getProjectsClosingAnimationElements
```

### Responsibilities

- root scope 안에서 DOM 요소 탐색
- selector 상수 사용
- Animation Controller에 필요한 요소 구조 반환
- DOM element 타입 정의

### Should NOT

- GSAP timeline을 생성하지 않는다.
- ScrollTrigger를 생성하지 않는다.
- React state를 변경하지 않는다.
- 전역 document 범위를 무분별하게 탐색하지 않는다.

### Example

```ts
export const getBuildVisualAnimationElements = (
  root: HTMLElement | null
): BuildVisualAnimationElements => ({
  root,
  header: queryElement(root, BUILD_EXPERIENCE_SELECTORS.visual.header),
});
```

---

## Animation Controller

Animation Controller는 GSAP 기반 애니메이션 구현과 제어만 담당한다.

기본 형태는 다음과 같다.

```ts
const BuildVisualAnimation = {
  create(elements): AnimationController {
    // Initial state
    // Timeline
    // setProgress
    // destroy
  },
};
```

반환 형태는 다음 기준을 따른다.

```ts
{
  setProgress(progress: number): void;
  destroy(): void;
}
```

### Responsibilities

- 초기 animation state 설정
- GSAP timeline 생성
- progress 기반 animation 제어
- cleanup 처리
- 요소 누락 시 noop Controller 반환

### Should NOT

- React JSX를 렌더링하지 않는다.
- React state를 직접 변경하지 않는다.
- 콘텐츠 데이터를 직접 관리하지 않는다.
- ScrollTrigger를 직접 등록하지 않는다.
- DOM selector 문자열을 직접 소유하지 않는다.
- Stage 전체 구간을 해석하지 않는다.

---

## Data

Data 파일은 화면에 표시되는 정적 콘텐츠를 관리한다.

Examples:

```txt
BUILD_INTRO_PROOF_POINTS
BUILD_STRUCTURE_ITEMS
BUILD_AI_ITEMS
BUILD_VISUAL_ITEMS
PROJECT_ITEMS
CONTACT_INTRO
LIFE_MOTION_ITEMS
```

### Responsibilities

- 반복 콘텐츠 관리
- 프로젝트 정보 관리
- 화면 텍스트 관리
- 컴포넌트 내부 데이터 비대화 방지
- 데이터 타입 정의

### Should NOT

- UI 로직을 포함하지 않는다.
- animation 로직을 포함하지 않는다.
- React 상태를 직접 관리하지 않는다.
- DOM 요소를 참조하지 않는다.

---

## Asset Helpers

Asset Helper는 정적 이미지 경로 생성 규칙을 관리한다.

Examples:

```txt
buildImages.ts
projectsImages.ts
```

### Responsibilities

- 이미지 base path 관리
- 프로젝트별 hero/detail 이미지 경로 생성
- monitor frame 경로 제공
- 이미지 경로 중복 제거

### Should NOT

- 콘텐츠 데이터를 직접 관리하지 않는다.
- 컴포넌트를 import하지 않는다.
- 도메인 간 이미지 경로를 하나의 파일에 섞지 않는다.

---

## Class Naming Rule

스타일 클래스와 애니메이션 타겟 클래스는 분리한다.

```tsx
<section className="build-intro-scene js-build-intro">
```

- `build-intro-scene`: 스타일용 클래스
- `js-build-intro`: animation target 클래스

Projects 영역도 같은 규칙을 따른다.

```tsx
<section className="projects-closing js-projects-closing">
```

`.js-*` 클래스는 CSS 스타일링에 사용하지 않는다.

---

## Domain Naming Rule

현재 주요 도메인은 다음 기준으로 분리한다.

```txt
build
projects
contact
intro
```

Build 영역:

```txt
components/features/build
components/scenes/build
animations/build
data/build
styles/features/build
```

Projects 영역:

```txt
components/features/projects
components/scenes/projects
animations/projects
data/projects
styles/features/projects
```

하나의 파일이나 폴더가 Build와 Projects 책임을 동시에 가지지 않도록 한다.
