"use client";

export default function BottomBar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bottom-bar" aria-label="page utilities">
      <div className="bottom-bar__inner">
        <button className="bottom-bar__top" onClick={scrollToTop}>
          Back to top ↑
        </button>
        <span className="bottom-bar__copy">Copyright © Bom 2026</span>
      </div>
    </div>
  );
}

// 이거 걍 하단에 footer에 고정하겠음 수정
