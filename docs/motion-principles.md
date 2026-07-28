# Motion Principles

이 프로젝트의 모션은 장식이 아니라 정보 구조와 사용자 흐름을 설명하기 위한 장치이다.

---

## Philosophy

Motion is not decoration.

Motion is part of the information architecture.

이 포트폴리오에서 모션은 단순히 화면을 화려하게 만드는 목적이 아니라,
사용자가 어떤 순서로 정보를 읽고 다음 행동으로 이어져야 하는지 안내하는 역할을 한다.

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

Build에서 Projects로,
Projects에서 Contact로 넘어가는 과정도 별개의 화면 전환이 아니라
하나의 연속된 내러티브처럼 느껴져야 한다.

---

### Structure

정보의 우선순위와 화면 구조가 명확하게 드러나야 한다.

사용자가 지금 무엇을 봐야 하는지,
다음으로 어떤 정보가 이어지는지 예측할 수 있어야 한다.

모션은 이미 존재하는 정보 구조를 보완해야 하며,
불명확한 구조를 움직임으로 감추는 방식으로 사용하지 않는다.

---

### Motion

움직임은 사용자의 시선을 유도하고 경험의 흐름을 강화해야 한다.

모션은 시각적 효과가 아니라,
화면의 맥락과 정보의 순서를 전달하는 도구로 사용한다.

각 애니메이션에는 다음 중 하나 이상의 목적이 있어야 한다.

```txt
정보의 우선순위 표현
시선 이동 유도
상태 변화 설명
Scene 간 맥락 연결
사용자 행동에 대한 피드백
```

---

## Scroll Feel

스크롤은 단순한 이동 수단이 아니라 이야기의 진행 방식이다.

목표하는 스크롤 감각은 다음과 같다.

- 부드러운 진입
- 자연스러운 감속
- 과하지 않은 관성
- 갑작스러운 snapping 지양
- 화면 전환의 연결감 유지
- 사용자의 스크롤 조작과 화면 반응 사이의 일관성 유지

스크롤 연출이 콘텐츠를 읽는 속도를 강제로 지나치게 제한하지 않도록 한다.

---

## Transition Rules

Scene 전환은 각각 독립된 애니메이션처럼 보이지 않고,
하나의 흐름 안에서 연결되어야 한다.

기준은 다음과 같다.

- 이전 Scene과 다음 Scene이 시각적으로 연결되어야 한다.
- 중요한 정보가 먼저 드러나야 한다.
- 화면 전환은 필요한 경우 일부 겹쳐질 수 있다.
- 전환 속도는 사용자의 읽기 흐름을 방해하지 않아야 한다.
- 같은 방향의 이동과 fade를 무분별하게 반복하지 않는다.
- 되감기가 어색한 구간은 once 성격으로 처리한다.
- progress 기반 구간은 스크롤 방향을 되돌려도 자연스러워야 한다.

---

## Progress-Based Motion

스크롤에 직접 연결된 애니메이션은 시간 기반 재생보다
진행률 기반 제어를 우선한다.

```ts
controller.setProgress(progress);
```

Stage Hook은 현재 스크롤 진행률을 계산하고,
Animation Controller는 전달받은 진행률을 시각적 상태로 변환한다.

```txt
ScrollTrigger progress
→ Stage Hook
→ Animation Controller
→ GSAP timeline progress
```

이 구조를 통해 스크롤 제어와 애니메이션 구현 책임을 분리한다.

---

## Attention Guide

모션은 사용자의 시선을 안내해야 한다.

사용 기준은 다음과 같다.

- 중요한 메시지를 먼저 보여줄 때
- 정보의 등장 순서를 제어할 때
- 사용자의 시선을 특정 요소로 이동시킬 때
- 섹션 간 연결성을 만들어야 할 때
- 상태 변화를 설명해야 할 때
- 정적인 화면만으로 맥락 전달이 부족할 때

한 화면에서 여러 요소가 동시에 강한 움직임을 갖지 않도록 한다.

우선순위가 가장 높은 요소를 먼저 보여주고,
나머지 요소는 시간차 또는 progress 차이를 통해 순차적으로 드러낸다.

---

## Avoid Unnecessary Motion

모든 요소를 움직이지 않는다.

모션이 필요하지 않은 경우는 다음과 같다.

- 이미 정보 구조가 명확한 경우
- 움직임이 오히려 가독성을 낮추는 경우
- 단순 장식에 가까운 경우
- 사용자의 집중을 분산시키는 경우
- 같은 의미의 전환을 반복하는 경우
- 사용자의 행동 결과를 늦게 전달하는 경우

모션을 제거했을 때 정보 전달력이 동일하다면,
기본적으로 더 단순한 표현을 선택한다.

---

## Duration and Distance

애니메이션의 이동 거리와 재생 시간은 정보의 중요도와 화면 크기에 맞춰 조정한다.

- 작은 UI 피드백은 짧고 즉각적으로 처리한다.
- Scene 전환은 콘텐츠를 인식할 수 있는 시간을 확보한다.
- 이동 거리가 클수록 충분한 시간과 완만한 easing을 사용한다.
- fade, blur, scale, position 변화를 한 요소에 과도하게 중첩하지 않는다.
- 모바일에서는 이동 거리와 blur 강도를 필요한 경우 줄인다.

숫자 자체를 규칙으로 고정하기보다,
실제 스크롤 감각과 콘텐츠 가독성을 기준으로 판단한다.

---

## Easing

Easing은 움직임의 성격을 결정한다.

```txt
none
→ ScrollTrigger progress와 직접 동기화되는 구간

power2.out / power3.out
→ 요소가 자연스럽게 등장하는 구간

power2.inOut
→ 두 상태 사이를 전환하는 구간
```

스크롤 진행률에 직접 연결된 긴 timeline에서는
사용자의 스크롤과 화면 반응이 어긋나지 않도록 `ease: "none"`을 우선 검토한다.

개별 요소의 짧은 등장이나 상태 전환에는
목적에 맞는 easing을 제한적으로 사용한다.

---

## Blur and Scale

Blur와 scale은 깊이감과 진입감을 만드는 보조 수단으로 사용한다.

사용 기준은 다음과 같다.

- Blur는 정보가 아직 활성화되지 않았음을 표현할 때 사용한다.
- Scale은 화면의 깊이 또는 강조 변화를 표현할 때 사용한다.
- 텍스트 가독성을 해칠 정도로 강한 blur를 오래 유지하지 않는다.
- 여러 요소에 동일한 blur와 scale 패턴을 반복하지 않는다.
- 모바일과 저성능 환경에서는 효과를 단순화할 수 있어야 한다.

---

## Pin and Sticky

고정 효과는 목적에 따라 구분한다.

```txt
sticky
→ CSS 기반으로 viewport 내부 레이아웃을 고정

pin
→ ScrollTrigger 구간 안에서 스크롤 진행률과 함께 화면을 고정
```

Build Intro처럼 내부 콘텐츠가 긴 흐름을 가지는 경우에는 sticky를 사용할 수 있다.

Projects Navigator처럼 특정 구간 안에서
목록과 미리보기를 동기화해야 하는 경우에는 pin을 사용한다.

고정 구간은 사용자가 화면에 갇힌 느낌을 받지 않도록
스크롤 길이와 콘텐츠 밀도를 함께 조정한다.

---

## Desktop and Mobile

데스크톱과 모바일은 같은 모션 값을 그대로 공유하지 않는다.

모바일에서는 다음 기준을 적용한다.

- 긴 pin 구간을 줄인다.
- 큰 이동 거리와 과한 scale 변화를 줄인다.
- blur와 복합 transform을 필요한 경우 단순화한다.
- 터치 스크롤 속도와 viewport 높이 변화를 고려한다.
- 작은 화면에서 콘텐츠가 잘리거나 읽기 어려워지지 않도록 한다.
- 모션보다 정보 가독성을 우선한다.

---

## Reduced Motion

사용자가 움직임 감소 설정을 활성화한 경우
과도한 이동과 연속적인 스크롤 애니메이션을 줄여야 한다.

```txt
prefers-reduced-motion: reduce
```

적용 기준은 다음과 같다.

- 큰 이동과 scale 전환 최소화
- 긴 scrub animation 단순화
- 필수 정보는 애니메이션 없이도 확인 가능하게 유지
- opacity 기반의 단순한 전환으로 대체
- 콘텐츠 접근 순서와 기능은 동일하게 유지

모션은 콘텐츠 접근의 전제 조건이 되어서는 안 된다.

---

## Tool Responsibility

각 도구의 역할은 명확히 분리한다.

```txt
Lenis
→ 전역 scroll smoothing과 관성 처리

ScrollTrigger
→ 스크롤 구간, pin, progress 계산

Stage Hook
→ ScrollTrigger와 Animation Controller 연결

DOM Helper
→ Scene 내부 animation target 수집

GSAP Animation Controller
→ 초기 상태, timeline, progress, cleanup 관리

SCSS
→ 정적 레이아웃과 단순한 상태 전환
```

하나의 도구나 계층이 모든 움직임을 담당하지 않도록 한다.

Stage Hook 안에 긴 GSAP timeline을 직접 작성하지 않고,
Animation Controller 안에서 ScrollTrigger를 직접 생성하지 않는다.

---

## Cleanup

애니메이션은 생성뿐 아니라 해제까지 하나의 책임으로 본다.

Animation Controller는 다음 형태를 따른다.

```ts
{
  setProgress(progress: number): void;
  destroy(): void;
}
```

`destroy()`에서는 timeline을 제거하고,
GSAP이 적용한 inline style을 필요한 범위에서 정리한다.

```ts
timeline.kill();

gsap.set(elements, {
  clearProps: "all",
});
```

Stage Hook cleanup에서는 ScrollTrigger, Controller, event listener,
GSAP context 등 생성한 자원을 모두 해제한다.

---

## Performance

모션은 프레임 유지와 사용자 입력 반응을 해치지 않아야 한다.

기본 기준은 다음과 같다.

- 가능한 경우 transform과 opacity 중심으로 애니메이션한다.
- layout을 반복해서 발생시키는 속성 변경을 피한다.
- DOM 탐색 결과를 timeline 실행 중 반복 계산하지 않는다.
- 화면에 필요하지 않은 요소까지 동시에 애니메이션하지 않는다.
- 이미지 크기와 로딩 시점을 함께 고려한다.
- resize 시 불필요한 Controller 재생성을 줄인다.
- ScrollTrigger refresh가 필요한 시점을 명확히 관리한다.

시각적 완성도보다 스크롤 반응성과 콘텐츠 접근성을 우선한다.

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

각 움직임이 사용자에게 무엇을 설명하는지 답할 수 없는 경우,
해당 모션은 제거하거나 단순화한다.
