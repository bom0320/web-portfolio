# Component Boundaries

이 문서는 포트폴리오 프로젝트에서 Stage, Scene, Feature Component, Shared Component, Animation Controller의 책임을 구분하기 위한 기준이다.

---

## Stage

Stage는 여러 Scene을 묶고, 하나의 큰 스크롤 흐름을 제어하는 단위이다.

Examples:

```txt
IntroStage
CapabilityStage
ContactStage
```

### Responsibilities

- Stage root ref 관리
- Scene 배치
- ScrollTrigger 등록
- Animation controller 연결
- Stage-level 상태 관리
- pin, scrub, progress 흐름 제어

### Should NOT

- 세부 UI를 직접 구현하지 않는다.
- 긴 콘텐츠 데이터를 직접 들고 있지 않는다.
- 개별 애니메이션 timeline을 직접 작성하지 않는다.

---

## Scene

Scene은 Stage 내부에서 하나의 시각적 구간을 구성하는 단위이다.

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

- JSX 구조 구성
- 하위 Feature Component 조합
- 시각적 레이아웃 구성
- style class 제공
- animation target class 제공

### Should NOT

- ScrollTrigger를 직접 등록하지 않는다.
- Stage 전체 progress를 직접 해석하지 않는다.
- 복잡한 animation orchestration을 직접 담당하지 않는다.

---

## Feature Component

Feature Component는 Scene 내부에서 사용되는 재사용 가능한 UI 단위이다.

Examples:

```txt
SkillCarousel
SkillCard
ProjectMonitor
ProjectList
ContactForm
```

### Responsibilities

- props 기반 UI 렌더링
- 단일 기능 처리
- 반복 UI 분리
- Scene 내부 가독성 개선

### Should NOT

- Stage의 스크롤 구조를 알지 않는다.
- 전체 페이지 흐름을 제어하지 않는다.
- ScrollTrigger를 직접 생성하지 않는다.

---

## Shared Component

Shared Component는 여러 영역에서 공통으로 사용하는 UI 또는 시스템 단위이다.

Examples:

```txt
Header
Button
Modal
SmoothScrollProvider
```

### Responsibilities

- 공통 UI 제공
- 전역 시스템 제공
- 중복 코드 감소
- 앱 전반에서 재사용 가능한 구조 제공

### Should NOT

- 특정 Stage에 강하게 의존하지 않는다.
- 특정 Scene의 전용 로직을 포함하지 않는다.

---

## Animation Controller

Animation Controller는 GSAP 기반 애니메이션 제어만 담당한다.

기본 형태는 다음과 같다.

```ts
createSomethingAnimation(elements);
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

### Should NOT

- React JSX를 렌더링하지 않는다.
- React state를 직접 변경하지 않는다.
- 콘텐츠 데이터를 직접 관리하지 않는다.
- DOM 탐색과 애니메이션 실행 범위를 무분별하게 섞지 않는다.

---

## Data

Data 파일은 화면에 표시되는 정적 콘텐츠를 관리한다.

Examples:

```txt
CAPABILITY_NAVIGATOR_ITEMS
LIFE_MOTION_ITEMS
CONTACT_INTRO_CONTENT
```

### Responsibilities

- 반복 콘텐츠 관리
- 프로젝트 정보 관리
- 화면 텍스트 관리
- 컴포넌트 내부 데이터 비대화 방지

### Should NOT

- UI 로직을 포함하지 않는다.
- animation 로직을 포함하지 않는다.
- React 상태를 직접 관리하지 않는다.

---

## Class Naming Rule

스타일 클래스와 애니메이션 타겟 클래스는 분리한다.

```tsx
<section className="capability-intro-scene js-capability-intro">
```

- `capability-intro-scene`: 스타일용 클래스
- `js-capability-intro`: animation target 클래스

`.js-*` 클래스는 CSS 스타일링에 사용하지 않는다.
