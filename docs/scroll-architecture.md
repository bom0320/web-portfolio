# Scroll Architecture

이 프로젝트는 하나의 페이지 안에서 여러 Stage가 연결되는 scroll-driven portfolio 구조를 가진다.

---

## Page Flow

전체 페이지 흐름은 다음과 같다.

```txt
IntroStage
→ CapabilityStage
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
CapabilityStage
ContactStage
```

### Responsibilities

- Stage root ref 관리
- ScrollTrigger 생성
- progress 해석
- Scene transition 연결
- pin section 제어
- animation controller 연결

Stage는 스크롤 진행률을 어떻게 해석할지 정의한다.

```txt
Defines:
How scroll progress is interpreted
```

---

## Scene

Scene은 Stage 내부의 시각적 화면 단위이다.

Examples:

```txt
HeroScene
LifeMotionScene
AboutHero
AboutInterview
AboutSkills
CapabilityIntroScene
ExperienceCapabilityScene
CapabilityNavigatorScene
ContactIntro
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

Feature Component는 Scene을 구성하는 재사용 가능한 UI 단위이다.

Examples:

```txt
SkillCarousel
SkillCard
ProjectList
ProjectMonitor
ContactForm
```

### Responsibilities

- UI 조각 구성
- 반복되는 구조 분리
- props 기반 렌더링
- Scene 가독성 개선

Feature Component는 어떤 UI가 존재하는지 정의한다.

```txt
Defines:
What UI exists
```

---

## IntroStage Architecture

IntroStage는 포트폴리오의 첫 인상과 About 진입을 담당한다.

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

## CapabilityStage Architecture

CapabilityStage는 사용자의 사고 방식과 프로젝트 결과물을 연결하는 핵심 구간이다.

```txt
CapabilityStage
├─ CapabilityIntroScene
├─ ExperienceCapabilityScene
├─ CapabilityNavigatorScene
└─ CapabilityClosingScene
```

### Scroll Behavior

- CapabilityIntroScene은 포트폴리오의 핵심 키워드를 제시한다.
- ExperienceCapabilityScene은 사고 방식과 구현 역량을 보여준다.
- CapabilityNavigatorScene은 프로젝트 결과물을 탐색하는 pinned showcase 구간이다.
- CapabilityClosingScene은 다음 행동으로 연결하는 마무리 구간이다.

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

ScrollTrigger는 Stage hook에서 등록한다.

Scene이나 Feature Component에서는 ScrollTrigger를 직접 생성하지 않는다.

기본 규칙은 다음과 같다.

- Stage root는 `ref`로 관리한다.
- 하위 animation target은 `.js-*` 클래스로 찾는다.
- style class와 animation target class는 분리한다.
- progress 기반 animation은 controller의 `setProgress()`로 전달한다.
- ScrollTrigger instance는 배열로 관리하고 cleanup에서 제거한다.
- GSAP context를 사용해 scope와 cleanup 범위를 제한한다.

---

## Pin and Sticky

pin과 sticky는 목적에 따라 구분해서 사용한다.

```txt
sticky: CSS 기반 화면 고정
pin: ScrollTrigger 기반 스크롤 구간 고정
```

### sticky

단순히 viewport 안에 고정된 레이아웃이 필요할 때 사용한다.

### pin

스크롤 진행률에 따라 특정 구간을 고정하고,
그 안에서 progress 기반 전환을 제어해야 할 때 사용한다.

Example:

```txt
CapabilityNavigatorScene
```

---

## Desktop and Mobile Scroll Config

데스크톱과 모바일은 같은 ScrollTrigger 값을 그대로 공유하지 않는다.

화면 높이, 콘텐츠 밀도, 스크롤 거리, 터치 스크롤 감각이 다르기 때문이다.

따라서 주요 Stage는 desktop config와 mobile config를 분리한다.

Example:

```txt
CAPABILITY_STAGE_SCROLL_CONFIG
CAPABILITY_STAGE_MOBILE_SCROLL_CONFIG
```

### Mobile Rules

- 전환 거리를 과하게 길게 잡지 않는다.
- start/end 값을 더 빠르게 반응하도록 조정한다.
- pin이 답답하게 느껴지는 구간은 길이를 줄인다.
- 복잡한 transform은 필요한 경우 단순화한다.

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
