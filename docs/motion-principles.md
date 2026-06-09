# Motion Principles

이 프로젝트의 모션은 장식이 아니라 정보 구조와 사용자 흐름을 설명하기 위한 장치이다.

---

## Philosophy

Motion is not decoration.

Motion is part of the information architecture.

이 포트폴리오에서 모션은 단순히 화면을 화려하게 만드는 목적이 아니라,
사용자가 어떤 순서로 정보를 읽어야 하는지 안내하는 역할을 한다.

---

## Core Keywords

이 프로젝트의 모션 방향은 다음 세 가지 키워드를 기준으로 한다.

```txt
Flow
Structure
Motion
```

---

### Flow

섹션과 섹션이 끊기지 않고 자연스럽게 이어져야 한다.

화면 전환은 독립된 장면의 나열이 아니라,
하나의 흐름 안에서 연결되어야 한다.

---

### Structure

정보의 우선순위와 화면 구조가 명확하게 드러나야 한다.

사용자가 지금 무엇을 봐야 하는지,
다음으로 어떤 정보가 이어지는지 예측할 수 있어야 한다.

---

### Motion

움직임은 사용자의 시선을 유도하고, 경험의 흐름을 강화해야 한다.

모션은 시각적 효과가 아니라,
화면의 맥락과 정보의 순서를 전달하는 도구로 사용한다.

---

## Scroll Feel

스크롤은 단순한 이동 수단이 아니라 이야기의 진행 방식이다.

목표하는 스크롤 감각은 다음과 같다.

- 부드러운 진입
- 자연스러운 감속
- 과하지 않은 관성
- 갑작스러운 snapping 지양
- 화면 전환의 연결감 유지

---

## Transition Rules

Scene 전환은 독립된 애니메이션처럼 보이지 않고,
하나의 흐름 안에서 연결되어야 한다.

기준은 다음과 같다.

- 이전 Scene과 다음 Scene이 시각적으로 연결되어야 한다.
- 중요한 정보가 먼저 드러나야 한다.
- 화면 전환은 약간 겹쳐질 수 있다.
- 전환 속도는 사용자의 읽기 흐름을 방해하지 않아야 한다.
- 되감기가 어색한 구간은 once 성격으로 처리한다.

---

## Attention Guide

모션은 사용자의 시선을 안내해야 한다.

사용 기준은 다음과 같다.

- 중요한 메시지를 먼저 보여줄 때
- 정보의 등장 순서를 제어할 때
- 사용자의 시선을 특정 요소로 이동시킬 때
- 섹션 간 연결성을 만들어야 할 때
- 정적인 화면만으로 맥락 전달이 부족할 때

---

## Avoid Unnecessary Motion

모든 요소를 움직이지 않는다.

모션이 필요하지 않은 경우는 다음과 같다.

- 이미 정보 구조가 명확한 경우
- 움직임이 오히려 가독성을 낮추는 경우
- 단순 장식에 가까운 경우
- 사용자의 집중을 분산시키는 경우

---

## Tool Responsibility

각 도구의 역할은 명확히 분리한다.

```txt
Lenis: scroll smoothing
GSAP: scroll-driven animation
ScrollTrigger: scroll progress control
Motion: micro interaction
CSS: static layout and simple transition
```

하나의 도구가 모든 움직임을 담당하지 않도록 한다.

---

## Portfolio Direction

이 포트폴리오는 다음 인상을 목표로 한다.

- cinematic
- immersive
- narrative-driven
- interaction-oriented
- structured
- product-minded

모션은 이 방향성을 강화하기 위해 사용한다.
