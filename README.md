# Interactive Frontend Portfolio

스크롤 기반 인터랙션과 모션을 중심으로 제작한 개인 웹 포트폴리오입니다.

단순히 프로젝트와 기술 스택을 나열하는 방식이 아니라,
화면의 흐름, 정보 구조, 사용자 경험을 어떻게 설계하는지 보여주는 것을 목표로 했습니다.

---

## Overview

이 포트폴리오는 하나의 페이지 안에서 여러 Stage가 이어지는 구조로 구성되어 있습니다.

```txt
IntroStage
→ BuildStage
→ ProjectsStage
→ ContactStage
```

각 Stage는 독립적인 스크롤 구간을 가지며,
GSAP과 ScrollTrigger를 활용해 Scene 단위의 전환이 자연스럽게 이어지도록 구현했습니다.

---

## Main Sections

### IntroStage

포트폴리오의 첫인상과 자기소개 흐름을 담당합니다.

```txt
HeroScene
→ LifeMotionScene
→ AboutSection
```

### BuildStage

사용자 경험을 설계하고 화면으로 구현하는 방식을 보여주는 구간입니다.

```txt
BuildIntroScene
→ BuildExperienceScene
```

BuildExperienceScene은 다음 세 영역으로 구성됩니다.

```txt
BuildStructureBlock
→ BuildAIBlock
→ BuildVisualBlock
```

### ProjectsStage

구현한 프로젝트를 탐색하고 상세 페이지로 연결하는 구간입니다.

```txt
ProjectsNavigatorScene
→ ProjectsClosingScene
```

ProjectsNavigatorScene에서는 프로젝트 목록과 미리보기 화면을 연결하고,
ProjectsClosingScene에서는 Contact 구간으로 이어지는 흐름을 구성합니다.

### ContactStage

포트폴리오의 마지막 연락 유도 구간입니다.

```txt
ContactIntro
→ ContactFooter
```

---

## Tech Stack

- Next.js
- React
- TypeScript
- SCSS
- GSAP
- ScrollTrigger
- Lenis
- TanStack Query
- Axios
- Biome

---

## Project Structure

```txt
src/
├─ animations/
│  ├─ build/
│  ├─ projects/
│  └─ ...
├─ app/
│  ├─ projects/
│  └─ ...
├─ assets/
├─ components/
│  ├─ stages/
│  ├─ scenes/
│  ├─ features/
│  └─ shared/
├─ data/
│  ├─ build/
│  ├─ projects/
│  └─ ...
├─ hooks/
├─ lib/
├─ providers/
└─ styles/
   ├─ features/
   │  ├─ build/
   │  └─ projects/
   └─ ...
```

---

## Architecture

이 프로젝트는 역할을 명확히 나누기 위해 다음 구조를 기준으로 구성했습니다.

```txt
Stage
└─ Scene
   └─ Feature Component
```

애니메이션 로직과 DOM 탐색 로직은 별도 계층으로 분리합니다.

```txt
Stage Hook
├─ ScrollTrigger orchestration
├─ DOM element helper
└─ Animation Controller
```

- **Stage**: 하나의 큰 스크롤 구간과 Scene 배치를 담당합니다.
- **Scene**: 하나의 시각적 화면 구간을 구성합니다.
- **Feature Component**: Scene 내부의 기능성 UI 단위를 담당합니다.
- **Stage Hook**: ScrollTrigger 등록과 progress 전달을 담당합니다.
- **DOM Helper**: 애니메이션 대상 DOM 요소를 수집합니다.
- **Animation Controller**: GSAP timeline과 animation 상태를 관리합니다.

---

## Motion Direction

모션은 장식이 아니라 정보의 흐름을 안내하는 요소로 사용했습니다.

```txt
Lenis
└─ global scroll smoothing

ScrollTrigger
└─ scroll range and progress control

GSAP Animation Controller
└─ visual state and timeline control

SCSS
└─ static layout and simple transition
```

Stage Hook은 스크롤 진행률을 계산하고,
Animation Controller의 `setProgress()`에 전달합니다.

```ts
controller.setProgress(progress);
```

Animation Controller는 React와 분리된 상태로 다음 인터페이스를 따릅니다.

```ts
{
  setProgress(progress: number): void;
  destroy(): void;
}
```

---

## Routing

프로젝트 상세 페이지는 다음 경로를 사용합니다.

```txt
/projects/[id]
```

예시:

```txt
/projects/washer
/projects/nova
/projects/hyoit
/projects/portfolio
```

---

## Getting Started

```bash
pnpm install
pnpm dev
```

```txt
http://localhost:3000
```

프로덕션 빌드 확인:

```bash
pnpm build
```

---

## Author

김봄  
Frontend Developer
