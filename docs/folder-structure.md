# Folder Structure

이 문서는 현재 `src/`의 파일 배치와 페이지에서 사용하는 연결 관계를 기록한다. 홈 페이지는 `IntroStage → BuildStage → ProjectsStage → ContactStage` 순서로 렌더링한다. `BuildStage.tsx`는 현재 존재하며 `src/app/page.tsx`에서 사용한다.

## src/

```txt
src/
├─ animations/
├─ app/
├─ assets/
├─ components/
├─ content/
├─ data/
├─ hooks/
├─ lib/
├─ styles/
└─ mdx-components.tsx
```

`src/providers/`는 없다. Provider는 `src/components/providers/`와 `src/components/shared/providers/`에 있다.

## app/

```txt
src/app/
├─ api/contact/route.ts
├─ projects/[id]/page.tsx
├─ icon.png
├─ layout.tsx
├─ opengraph-image.png
└─ page.tsx
```

`page.tsx`는 홈의 네 Stage를 배치한다. `projects/[id]/page.tsx`는 프로젝트 데이터와 MDX 콘텐츠를 조회해 `ProjectDetailStage`에 전달한다. `layout.tsx`는 전역 스타일, `Header`, `ScrollToTop`, `AmplitudeProvider`, `SmoothScrollProvider`를 연결한다.

## components/

```txt
src/components/
├─ stages/
├─ scenes/
├─ features/
├─ shared/
└─ providers/AmplitudeProvider.tsx
```

### stages/

```txt
src/components/stages/
├─ IntroStage.tsx
├─ BuildStage.tsx
├─ ProjectsStage.tsx
├─ ContactStage.tsx
├─ ProjectDetailStage.tsx
├─ constants/
├─ hooks/
│  ├─ useIntroStageAnimation.ts
│  ├─ useBuildStageAnimation.ts
│  ├─ useProjectsStageAnimation.ts
│  ├─ useContactStageAnimation.ts
│  ├─ useProjectDetailStageAnimation.ts
│  └─ helpers/{intro,build,projects,contact,projectDetail}/
└─ index.ts
```

홈 Stage는 Scene을 배치하고 Stage별 애니메이션 Hook과 섹션 조회 추적 Hook을 호출한다. 프로젝트 상세 Stage는 상세 Scene과 상세 애니메이션 Hook을 연결한다. 홈 Stage Hook은 ScrollTrigger와 Animation Controller를 만들고 정리하며, 관련 element·controller 구성 함수는 `hooks/helpers/`에 있다.

### scenes/

```txt
src/components/scenes/
├─ intro/
│  ├─ HeroScene.tsx
│  ├─ LifeMotionScene.tsx
│  └─ dom/
├─ about/
│  ├─ AboutScenes.tsx
│  ├─ AboutHeroScene.tsx
│  ├─ SkillsScene.tsx
│  └─ dom/
├─ build/
│  ├─ BuildIntroScene.tsx
│  ├─ BuildExperienceScene.tsx
│  └─ dom/{intro,experience}/
├─ projects/
│  ├─ ProjectsShowcaseScene.tsx
│  ├─ ProjectsClosingScene.tsx
│  ├─ ProjectDetailScene.tsx
│  └─ dom/{showcase,closing}/
└─ contact/
   ├─ ContactScene.tsx
   └─ dom/
```

`IntroStage`는 Hero, LifeMotion, About Scene을 묶는다. `BuildStage`는 Build Intro와 Experience Scene을, `ProjectsStage`는 Showcase와 Closing Scene을 묶는다. `ContactStage`는 `ContactScene`을 사용한다. 각 `dom/` 아래의 `*.selectors.ts`와 `*.element.ts`는 해당 애니메이션 대상 요소를 찾는 데 사용된다.

### features/

```txt
src/components/features/
├─ hero/
├─ lifeMotion/
├─ about/{hero,skills}/
├─ build/
│  ├─ intro/
│  └─ experience/{structure,ai,visual}/
├─ projects/{showcase,closing,detail}/
└─ contact/modal/
```

Scene이 조합하는 UI 컴포넌트가 이곳에 있다. 프로젝트 탐색 UI는 `projects/showcase/`의 `ProjectsShowcase`, `ProjectsCarousel`, `ProjectSlide`, 필터와 컨트롤로 구성된다. 상세 UI는 `projects/detail/`의 Hero, Content, Nav, Actions 등으로 구성된다. `projects/navigator/`와 `ProjectDetailGallery`는 현재 없다.

### shared/ 및 providers/

```txt
src/components/shared/
├─ common/
├─ layout/header/
├─ navigation/ScrollToTop.tsx
├─ providers/SmoothScrollProvider.tsx
└─ ui/{ArrowButton,GradientText}.tsx

src/components/providers/
└─ AmplitudeProvider.tsx
```

`SmoothScrollProvider`는 데스크톱에서 Lenis를 GSAP ticker 및 ScrollTrigger와 연결하고 모바일에서는 Lenis를 만들지 않는다. `AmplitudeProvider`는 브라우저 분석 SDK를 초기화한다. 두 Provider는 `src/app/layout.tsx`에서 사용한다.

## animations/

```txt
src/animations/
├─ _shared/
├─ intro/transitions/{heroToLife,lifeToAbout}.animation.ts
├─ about/{aboutHero,aboutScene,aboutCharacter}.animation.ts
├─ build/
│  ├─ intro/{buildIntro,buildIntroProof}.animation.ts
│  └─ experience/{buildStructure,buildAI,buildVisual}.animation.ts
├─ projects/
│  ├─ showcase/projectsShowcase.animation.ts
│  └─ closing/projectsClosing.animation.ts
├─ contact/{contactIntro,contactFooter,contactSubmitModal}.animation.ts
└─ header.animation.ts
```

이 파일들은 GSAP 애니메이션과 progress 제어 코드를 담는다. 프로젝트 탐색 애니메이션의 현재 이름은 `projectsShowcase.animation.ts`이다. `animations/transitions/`나 `projects/navigator/`는 없다.

## assets/, content/, data/

```txt
src/assets/
├─ buildImages.ts
└─ projectsImages.ts

src/content/projects/
├─ hyoit.mdx
├─ nova.mdx
├─ portfolio.mdx
├─ washer.mdx
└─ index.ts

src/data/
├─ build/{intro,experience}/
├─ projects/
│  ├─ projectItems.ts
│  ├─ projectDetailNavigation.ts
│  └─ index.ts
├─ contacts.ts
├─ lifeMotions.ts
└─ skills.ts
```

`assets/`의 두 파일은 각각 `/images/build`와 `/images/projects` 경로를 생성한다. `content/projects/index.ts`는 프로젝트 ID에 맞는 MDX 컴포넌트를 반환한다. `data/`에는 화면에서 사용하는 정적 항목과 프로젝트 상세 내비게이션 데이터가 있다.

## hooks/, lib/

```txt
src/hooks/
├─ useContactForm.ts
├─ useMediaQuery.ts
└─ useSectionViewTracking.ts

src/lib/
├─ amplitude.ts
├─ analytics/events.ts
├─ contact/
└─ gsap/
   ├─ createScrollTrigger.ts
   ├─ refreshScrollTrigger.ts
   ├─ registerGsapPlugins.ts
   └─ constants/
```

공통 React Hook은 `src/hooks/`, Stage별 애니메이션 Hook은 `src/components/stages/hooks/`에 있다. `lib/gsap/`은 ScrollTrigger 생성과 refresh 등의 공통 함수를 제공한다. `lib/contact/`는 연락 폼 처리에 사용된다.

## styles/, public/images/

```txt
src/styles/
├─ abstracts/
├─ base/
├─ features/{hero,life-motion,about,build,projects,contact}/
├─ layout/
├─ shared/
├─ stages/
└─ index.scss

public/images/
├─ build/visual/
├─ life/
├─ logo/
└─ projects/{hyoit,nova,portfolio,washer}/
```

프로젝트 스타일 폴더는 `showcase/`, `closing/`, `detail/`을 포함한다. `public/images/projects/monitor-frame.png`는 현재 없다.
