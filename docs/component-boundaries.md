# Component Boundaries

## components/

Responsible for:

- rendering UI
- visual structure
- component composition

Should NOT:

- own complex orchestration logic

---

## animations/

Responsible for:

- GSAP timelines
- ScrollTrigger orchestration
- motion systems
- scene transitions

Defines:
"How things move"

---

## providers/

Responsible for:

- global systems
- Lenis setup
- app-level orchestration
