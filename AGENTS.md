# Project Purpose

김봄의 스크롤 기반 개인 웹 포트폴리오다. 홈 페이지는 Intro, Build, Projects, Contact Stage를 순서대로 보여주고, `/projects/[id]`에서 프로젝트 상세 콘텐츠를 제공한다.

## Source of Truth

- 현재 동작과 명칭은 `src/`와 `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`를 기준으로 판단한다.
- `README.md`와 `docs/`는 배경 설명으로 참고한다. 설명이 코드와 다르면 코드를 우선한다.

## Tech Stack

- Next.js App Router, React, TypeScript, Sass/SCSS, MDX.
- GSAP/ScrollTrigger와 Lenis가 스크롤 및 애니메이션을 담당한다. Amplitude는 분석, Resend는 contact API의 메일 전송에 쓰인다.
- ESLint는 `eslint.config.mjs`의 Next 규칙을 사용한다. `@/*` import 별칭은 `tsconfig.json`에서 `src/*`를 가리킨다.

## Architecture

- `src/app`: 페이지, 레이아웃, API route. 홈 페이지는 Stage를 조합한다.
- `src/components/stages`: 큰 스크롤 구간과 Scene 배치. `hooks/`에서 ScrollTrigger를 연결하고 진행률을 전달한다.
- `src/components/scenes`: 화면 구조와 애니메이션 대상 DOM. `dom/` helper는 대상 요소를 찾는다.
- `src/components/features`: 화면 UI와 상호작용. `src/animations`: GSAP 애니메이션과 controller. `src/data`: 표시 데이터. `src/content/projects`: 상세 MDX 콘텐츠.
- 위 역할은 현재 코드의 일반적인 구조다. 예외를 변경할 때는 해당 구현을 먼저 확인한다.

## Context Navigation

- 홈 화면 흐름: `src/app/page.tsx` → `src/components/stages/` → `src/components/scenes/` → `src/components/features/`.
- 스크롤 변경: 해당 Stage의 `hooks/`와 `constants/`, Scene의 `dom/`, 해당 `src/animations/`를 함께 확인한다. 자세한 설계 배경은 `docs/component-boundaries.md`, `docs/scroll-architecture.md`, `docs/motion-principles.md`를 참고한다.
- 프로젝트 상세: `src/app/projects/[id]/page.tsx`, `src/data/projects/`, `src/content/projects/`. Contact: `src/app/api/contact/route.ts`, `src/hooks/useContactForm.ts`, `src/lib/contact/`.

## Working Rules

- 기존 Stage/Scene/Feature 이름과 경계를 확인한 뒤 수정한다. 새 UI 콘텐츠는 해당 도메인의 `data` 또는 `content` 위치를 확인한다.
- 파일을 수정하기 전에 관련 구현과 호출 관계를 먼저 읽는다. 이름이나 위치만 보고 동작을 추측하지 않는다.
- 새 abstraction, helper, hook, component를 만들기 전에 기존에 같은 역할을 하는 구현이 있는지 먼저 검색한다.
- 요청을 해결하는 데 필요한 최소 범위만 변경한다. 관련 없는 refactor나 포맷 변경을 함께 수행하지 않는다.
- 스크롤 애니메이션을 바꿀 때 selector, DOM helper, Stage hook, controller의 연결을 확인하고 생성한 ScrollTrigger와 애니메이션 자원의 cleanup을 유지한다.
- 스타일은 `src/styles/`에 있고, 애니메이션 대상은 Scene/Feature의 `.js-*` 클래스로 지정된다.

## Verification

- 의존성이 설치된 환경에서 `pnpm lint`와 `pnpm build`를 실행한다. 두 명령은 `package.json`의 실제 script다.
- 테스트 script는 현재 없다. `pnpm build`는 `.next` 산출물을 생성한다.

## Safety

- `.env.local`과 secret 파일을 열거나 출력하지 않는다. Contact API는 환경 변수를 읽으므로 값 대신 `src/app/api/contact/route.ts`의 사용처를 확인한다.
- 요청 범위 밖의 파일 변경, commit, push는 별도 요청이 있을 때만 수행한다.

