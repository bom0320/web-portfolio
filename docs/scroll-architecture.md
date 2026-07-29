# Scroll Architecture

이 프로젝트는 하나의 페이지 안에서 여러 Stage가 연결되는 scroll-driven portfolio 구조를 가진다.

---

## Page Flow

전체 페이지 흐름은 다음과 같다.

```txt
IntroStage
→ BuildStage
→ ProjectsStage
→ ContactStage
```

각 Stage는 독립적인 스크롤 구간을 가지고,
Stage 내부에서 Scene 단위의 전환이 발생한다.

---

## Global Scroll Physics

전역 스크롤 감각은 Lenis가 담당한다.

Managed by:

```txt
SmoothScrollProvider
```

### Responsibilities

- smooth scroll 처리
- inertia 적용
- global scroll update
- GSAP ticker와 Lenis raf 연결
- ScrollTrigger update 동기화

Lenis는 스크롤의 감각을 정의한다.

```txt
Defines:
How scrolling feels
```

---

## Stage

Stage는 하나의 narrative scroll chapter이다.

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
- Stage Hook 연결
- Stage-level 상태 관리
- 분석 이벤트 연결

ScrollTrigger 등록과 progress 해석은 Stage 컴포넌트가 아니라 Stage Hook이 담당한다.

```txt
Stage Component
└─ useStageAnimation()
   ├─ ScrollTrigger
   ├─ Stage Elements
   └─ Animation Controllers
```

---

## Stage Hook

Stage Hook은 스크롤 진행률과 Animation Controller를 연결한다.

Examples:

```txt
useIntroStageAnimation
useBuildStageAnimation
useProjectsStageAnimation
useContactStageAnimation
```

### Responsibilities

- Stage root scope 설정
- ScrollTrigger 생성
- start/end 구간 정의
- progress 범위 해석
- Animation Controller 생성
- Controller progress 전달
- cleanup 처리
- resize와 refresh 대응

Stage Hook은 애니메이션 구현 자체를 담당하지 않는다.

```txt
Defines:
How scroll progress controls animations
```

---

## Scene

Scene은 Stage 내부의 시각적 화면 단위이다.

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

- 시각적 화면 구성
- JSX 구조 제공
- animation target 제공
- Feature Component 조합

Scene은 화면에 무엇이 보이는지 정의한다.

```txt
Defines:
What is visually shown
```

---

## Feature Component

Feature Component는 Scene을 구성하는 기능성 UI 단위이다.

Examples:

```txt
BuildStructureBlock
BuildAIBlock
BuildVisualBlock
ProjectsNavigatorList
ProjectsNavigatorMonitor
ProjectDetailGallery
ContactForm
```

### Responsibilities

- UI 조각 구성
- 반복되는 구조 분리
- props 기반 렌더링
- Scene 가독성 개선
- 사용자 interaction 처리

Feature Component는 어떤 UI가 존재하는지 정의한다.

```txt
Defines:
What UI exists
```

---

## DOM Helper

DOM Helper는 Scene root 내부에서 Animation Controller가 사용할 요소를 찾는다.

```txt
Scene Root
└─ DOM Helper
   ├─ queryElement()
   ├─ queryElements()
   └─ AnimationElements
```

Examples:

```txt
getBuildIntroAnimationElements
getBuildStructureAnimationElements
getBuildAIAnimationElements
getProjectsClosingAnimationElements
```

Selector 문자열은 selector 파일에서 관리한다.

```txt
buildIntro.selectors.ts
buildExperience.selectors.ts
projectsNavigator.selectors.ts
projectsClosing.selectors.ts
```

---

## Animation Controller

Animation Controller는 GSAP timeline과 animation 상태를 관리한다.

```txt
Animation Controller
├─ Initial state
├─ GSAP timeline
├─ setProgress()
└─ destroy()
```

기본 반환 형태:

```ts
{
  setProgress(progress: number): void;
  destroy(): void;
}
```

Animation Controller는 ScrollTrigger를 직접 만들지 않는다.

```txt
Defines:
How visual state changes
```

---

## IntroStage Architecture

IntroStage는 포트폴리오의 첫인상과 About 진입을 담당한다.

```txt
IntroStage
├─ HeroScene
├─ LifeMotionScene
└─ AboutSection
   ├─ AboutHero
   ├─ AboutInterview
   └─ AboutSkills
```

### Scroll Behavior

- Hero에서 LifeMotion으로 전환된다.
- LifeMotion은 화면 전체를 채우며 흐름감을 만든다.
- AboutSection은 이어지는 소개 구간으로 연결된다.
- Hero, LifeMotion, About은 같은 Stage 안에서 연결된 흐름으로 처리된다.

---

## BuildStage Architecture

BuildStage는 사용자 경험을 설계하고 화면으로 구현하는 방식을 보여주는 구간이다.

```txt
BuildStage
├─ BuildIntroScene
└─ BuildExperienceScene
   ├─ BuildStructureBlock
   ├─ BuildAIBlock
   └─ BuildVisualBlock
```

### BuildIntroScene

BuildIntroScene은 Build 구간의 핵심 관점과 설계 기준을 제시한다.

```txt
BuildIntroScene
├─ IntroPinnedNarrative
└─ IntroVisualProof
```

관련 Animation Controller:

```txt
BuildIntroAnimation
BuildIntroProofAnimation
```

### BuildExperienceScene

BuildExperienceScene은 구현 방식을 세 영역으로 나누어 보여준다.

```txt
Structure
AI
Visual
```

관련 Animation Controller:

```txt
BuildStructureAnimation
BuildAIAnimation
BuildVisualAnimation
```

### Scroll Behavior

- BuildIntroScene에서 설계 관점을 제시한다.
- pinned narrative의 progress에 따라 제목과 설명이 전환된다.
- visual proof에서 시각적 근거가 순차적으로 드러난다.
- BuildExperienceScene에서 Structure, AI, Visual 영역이 이어진다.
- 각 영역은 독립적인 Controller를 통해 progress 기반으로 등장한다.

---

## ProjectsStage Architecture

ProjectsStage는 프로젝트 결과물을 탐색하고 Contact 구간으로 연결하는 역할을 한다.

```txt
ProjectsStage
├─ ProjectsNavigatorScene
└─ ProjectsClosingScene
```

### ProjectsNavigatorScene

ProjectsNavigatorScene은 프로젝트 목록과 화면 미리보기를 연결하는 pinned showcase 구간이다.

```txt
ProjectsNavigatorScene
├─ ProjectsNavigatorIntro
├─ ProjectsNavigatorList
└─ ProjectsNavigatorMonitor
```

Stage 상태:

```txt
activeProjectIndex
previewProjectIndex
visibleProjectIndex
```

관련 Animation Controller:

```txt
ProjectsNavigatorAnimation
```

### ProjectsClosingScene

ProjectsClosingScene은 프로젝트 탐색 이후 Contact 구간으로 이어지는 마무리 장면이다.

```txt
ProjectsClosingScene
├─ ProjectsClosingStatement
└─ ProjectsClosingScrollCue
```

관련 Animation Controller:

```txt
ProjectsClosingAnimation
```

### Scroll Behavior

- Navigator intro가 먼저 등장한다.
- pinned showcase 구간에서 프로젝트 목록과 monitor preview가 동기화된다.
- 현재 project index와 hover preview index를 분리한다.
- 프로젝트 선택 시 상세 페이지로 이동한다.
- Closing Scene에서 Contact 구간으로 흐름을 연결한다.

---

## ContactStage Architecture

ContactStage는 포트폴리오의 마지막 행동 유도 구간이다.

```txt
ContactStage
├─ ContactIntro
└─ ContactFooter
```

### Scroll Behavior

- ContactIntro에서 연락 목적과 메시지를 제시한다.
- ContactFooter는 마지막 CTA로 자연스럽게 드러난다.
- Footer reveal은 once 성격의 애니메이션으로 처리한다.

---

## ScrollTrigger Rules

ScrollTrigger는 Stage Hook에서 등록한다.

Scene이나 Feature Component에서는 ScrollTrigger를 직접 생성하지 않는다.

기본 규칙은 다음과 같다.

- Stage root는 `ref`로 관리한다.
- 하위 animation target은 `.js-*` 클래스로 찾는다.
- style class와 animation target class는 분리한다.
- progress 기반 animation은 Controller의 `setProgress()`로 전달한다.
- ScrollTrigger instance는 cleanup에서 제거한다.
- GSAP context를 사용해 scope와 cleanup 범위를 제한한다.
- Scene root 외부를 무분별하게 탐색하지 않는다.

---

## Pin and Sticky

pin과 sticky는 목적에 따라 구분해서 사용한다.

```txt
sticky: CSS 기반 화면 고정
pin: ScrollTrigger 기반 스크롤 구간 고정
```

### sticky

단순히 viewport 안에 고정된 레이아웃이 필요할 때 사용한다.

Example:

```txt
BuildIntroScene의 pinned narrative 내부 sticky 영역
```

### pin

스크롤 진행률에 따라 특정 구간을 고정하고,
그 안에서 progress 기반 전환을 제어해야 할 때 사용한다.

Example:

```txt
ProjectsNavigatorScene
```

---

## Build Scroll Config

BuildStage는 intro와 experience의 progress 범위를 분리해 관리한다.

Selector 기준:

```txt
BUILD_STAGE_SELECTORS
```

주요 대상:

```txt
intro
introPinned
introProof
structure
ai
visual
```

Animation Controller:

```txt
BuildIntroAnimation
BuildIntroProofAnimation
BuildStructureAnimation
BuildAIAnimation
BuildVisualAnimation
```

---

## Projects Scroll Config

ProjectsStage는 navigator와 closing 구간을 분리해 관리한다.

Selector 기준:

```txt
PROJECTS_STAGE_SELECTORS
```

주요 대상:

```txt
navigatorIntro
navigatorPin
navigatorLayer
closing
```

Animation Controller:

```txt
ProjectsNavigatorAnimation
ProjectsClosingAnimation
```

---

## Desktop and Mobile Scroll Config

데스크톱과 모바일은 같은 ScrollTrigger 값을 그대로 공유하지 않는다.

화면 높이, 콘텐츠 밀도, 스크롤 거리, 터치 스크롤 감각이 다르기 때문이다.

따라서 주요 Stage는 desktop config와 mobile config를 분리한다.

### Mobile Rules

- 전환 거리를 과하게 길게 잡지 않는다.
- start/end 값을 더 빠르게 반응하도록 조정한다.
- pin이 답답하게 느껴지는 구간은 길이를 줄인다.
- 복잡한 transform은 필요한 경우 단순화한다.
- viewport 높이 변화에 대응한다.

---

## Refresh Strategy

이미지 로딩, viewport 변화, route 이동 후에는 ScrollTrigger refresh가 필요하다.

이 프로젝트에서는 layout shift를 줄이기 위해 requestAnimationFrame 기반 refresh helper를 사용한다.

```txt
refreshScrollTrigger()
```

사용 목적은 다음과 같다.

- 이미지 로딩 후 위치 재계산
- viewport resize 후 start/end 재계산
- route 이동 후 scroll position 안정화
- pin spacing 재계산

---

## Cleanup Strategy

Stage Hook cleanup에서는 생성한 자원을 모두 제거한다.

```txt
cleanup
├─ ScrollTrigger kill
├─ Animation Controller destroy
├─ GSAP context revert
└─ event listener remove
```

Animation Controller의 `destroy()`에서는 timeline을 제거하고,
GSAP이 적용한 inline style을 정리한다.

```ts
timeline.kill();

gsap.set(elements, {
  clearProps: "all",
});
```
