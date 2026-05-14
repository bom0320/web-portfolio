# Scroll Architecture

## Global Scroll Physics

Managed by:

- LenisProvider

Responsibilities:

- smooth interpolation
- inertia
- easing
- global scroll feel

Defines:
"How scrolling feels"

---

## Stage

Definition:
A narrative scroll chapter with its own orchestration logic.

Examples:

- IntroStage
- AboutStage
- ProjectsStage

Defines:
"How scroll progress is interpreted"

---

## Scene

Definition:
A cinematic scene inside a Stage.

Examples:

- HeroScene
- LifeMotionScene
- InterviewScene

Defines:
"What is visually shown"

---

## Feature Component

Definition:
Reusable UI pieces composing scenes.

Examples:

- HeroContent
- ProjectMonitor
- SkillCard

Defines:
"What UI exists"
