# Interactive Frontend Portfolio

스크롤 기반 인터랙션과 모션을 중심으로 제작한 개인 웹 포트폴리오입니다.

단순히 프로젝트와 기술 스택을 나열하는 방식이 아니라,
화면의 흐름, 정보 구조, 사용자 경험을 어떻게 설계하는지 보여주는 것을 목표로 했습니다.

---

## Overview

이 포트폴리오는 하나의 페이지 안에서 여러 Stage가 이어지는 구조로 구성되어 있습니다.

```txt
IntroStage
→ CapabilityStage
→ ContactStage
```

각 Stage는 독립적인 스크롤 구간을 가지며,
GSAP과 ScrollTrigger를 활용해 Scene 단위의 전환이 자연스럽게 이어지도록 구현했습니다.

---

## Main Sections

### IntroStage

포트폴리오의 첫 인상과 자기소개 흐름을 담당합니다.

```txt
HeroScene
→ LifeMotionScene
→ AboutSection
```

### CapabilityStage

화면을 설계하고 구현하는 방식과 프로젝트 결과물을 보여주는 핵심 구간입니다.

```txt
CapabilityIntroScene
→ ExperienceCapabilityScene
→ CapabilityNavigatorScene
→ CapabilityClosingScene
```

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
- React Query
- Axios
- Biome

---

## Project Structure

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

## Architecture

이 프로젝트는 역할을 명확히 나누기 위해 다음 구조를 기준으로 구성했습니다.

```txt
Stage
└─ Scene
   └─ Feature Component
```

- **Stage**: 스크롤 흐름과 Scene 전환을 제어합니다.
- **Scene**: 하나의 시각적 화면 구간을 구성합니다.
- **Feature Component**: Scene 내부에서 재사용되는 UI 단위를 담당합니다.
- **Animation Controller**: GSAP 기반 애니메이션 로직을 분리해 관리합니다.

---

## Motion Direction

모션은 장식이 아니라 정보의 흐름을 안내하는 요소로 사용했습니다.

```txt
Lenis: scroll smoothing
GSAP: scroll-driven animation
ScrollTrigger: scroll progress control
CSS: static layout and simple transition
```

---

## Getting Started

```bash
npm run dev
```

```txt
http://localhost:3000
```

---

## Author

김봄
Frontend Developer
