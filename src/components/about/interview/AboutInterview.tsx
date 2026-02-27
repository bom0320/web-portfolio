"use client";

type InterviewItem = {
  id: string; // "Q1"
  question: string;
  answer: string;
};

const INTERVIEWS: InterviewItem[] = [
  {
    id: "Q1",
    question: "왜 프론트엔드라는 직종을 선택하셨나요?",
    answer:
      "저는 화면을 ‘예쁘게 만드는 것’보다 사용자의 흐름을 설계하는 일에 더 끌립니다. 사용자가 어디서 멈추고, 무엇을 헷갈리는지 구조적으로 관찰하고, 그 불편을 인터페이스로 해결하는 과정이 프론트엔드의 매력이라고 느꼈습니다.",
  },
  {
    id: "Q2",
    question: "프로젝트에서 가장 중요하게 보는 기준은 무엇인가요?",
    answer:
      "‘기능이 되느냐’보다 ‘사용자가 이해하느냐’를 우선합니다. 같은 기능이라도 정보 구조와 인터랙션이 다르면 경험이 완전히 달라지기 때문에, 사용자 입장에서 납득되는 흐름을 만드는 것을 기준으로 두고 있습니다.",
  },
  {
    id: "Q3",
    question: "문제를 만났을 때 해결 방식은 어떤 편인가요?",
    answer:
      "증상을 먼저 고치기보다 원인을 분해해서 정의합니다. 재현 → 원인 가설 → 최소 수정으로 검증 → 확장 적용 순으로 접근하고, 결과는 다음에 재사용할 수 있도록 정리해두는 편입니다.",
  },
  {
    id: "Q4",
    question: "UI/UX에서 본인이 강점이라고 생각하는 부분은요?",
    answer:
      "디테일을 구현 가능한 단위로 번역하는 능력입니다. 간격, 타이포, 모션의 속도 같은 작은 요소들이 사용자 감각을 만든다고 믿어서, 디자인 의도를 최대한 그대로 구현하려고 합니다.",
  },
  {
    id: "Q5",
    question: "앞으로 어떤 프론트엔드 개발자가 되고 싶나요?",
    answer:
      "보이는 화면을 넘어서 제품의 흐름과 기준을 설계할 수 있는 개발자가 되고 싶습니다. 기술 선택이나 구조 설계에서 ‘왜’를 설명할 수 있고, 팀이 같은 방향을 보게 만드는 개발자를 목표로 하고 있습니다.",
  },
];

export default function AboutInterview() {
  return (
    <section className="about-interview" aria-label="Interview Section">
      <div className="about-interview__inner">
        <h2 className="about-interview__title">INTERVIEWS</h2>

        <div className="about-interview__list">
          {INTERVIEWS.map((item) => (
            <article key={item.id} className="interview-row">
              <div className="interview-row__q">{item.id}</div>

              <div className="interview-row__content">
                <h3 className="interview-row__question">{item.question}</h3>
                <p className="interview-row__answer">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
