export default function AICapabilityBlock() {
  return (
    <article className="experience-capability-block experience-capability-block--ai">
      <div className="experience-capability-block__header">
        <p className="experience-capability-block__eyebrow">AI</p>

        <h2 className="experience-capability-block__title">
          AI와 함께
          <br />더 깊게.
        </h2>

        <p className="experience-capability-block__desc">
          저는 AI를 단순한 자동화 도구가 아니라, 더 깊게 탐구하고 빠르게
          실험하기 위해 활용합니다. 구조를 비교하고, 흐름을 탐색하고, 더 나은
          경험을 계속 고민합니다.
        </p>
      </div>

      <div className="experience-capability-ai-grid">
        <article className="experience-capability-ai-card">
          <span>01</span>
          <h3>Comparative Reasoning</h3>
          <p>답을 받아들이기보다, 더 나은 방향을 계속 비교합니다.</p>
        </article>

        <article className="experience-capability-ai-card">
          <span>02</span>
          <h3>Expanded Exploration</h3>
          <p>여러 레퍼런스와 도구를 연결해 더 넓게 탐색합니다.</p>
        </article>

        <article className="experience-capability-ai-card">
          <span>03</span>
          <h3>Understanding Over Answers</h3>
          <p>결과보다 구조와 이유를 이해하는 과정을 중요하게 봅니다.</p>
        </article>
      </div>
    </article>
  );
}
