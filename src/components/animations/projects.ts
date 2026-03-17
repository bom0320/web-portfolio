import gsap from "gsap";

interface RunProjectTransitionParams {
  direction: 1 | -1;
  infoCurrent: HTMLDivElement | null;
  infoNext: HTMLDivElement | null;
  visualCurrent: HTMLDivElement | null;
  visualNext: HTMLDivElement | null;
  detailCurrent: HTMLDivElement | null;
  detailNext: HTMLDivElement | null;
  thumbsCurrent: HTMLDivElement | null;
  thumbsNext: HTMLDivElement | null;
  onComplete: () => void;
}

export function runProjectTransition({
  direction,
  infoCurrent,
  infoNext,
  visualCurrent,
  visualNext,
  detailCurrent,
  detailNext,
  thumbsCurrent,
  thumbsNext,
  onComplete,
}: RunProjectTransitionParams) {
  const outY = direction === 1 ? -28 : 28;
  const inY = direction === 1 ? 28 : -28;

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    onComplete,
  });

  tl.set([infoNext, visualNext, detailNext, thumbsNext], {
    autoAlpha: 1,
  });

  tl.fromTo(
    infoNext,
    { autoAlpha: 0, y: inY },
    { autoAlpha: 1, y: 0, duration: 0.45 },
    0
  );
  tl.to(infoCurrent, { autoAlpha: 0, y: outY, duration: 0.3 }, 0);

  tl.fromTo(
    visualNext,
    { autoAlpha: 0, y: inY + 8, scale: 0.985 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
    0.04
  );
  tl.to(
    visualCurrent,
    { autoAlpha: 0, y: outY - 8, scale: 0.985, duration: 0.35 },
    0
  );

  tl.fromTo(
    detailNext,
    { autoAlpha: 0, y: inY * 0.7 },
    { autoAlpha: 1, y: 0, duration: 0.4 },
    0.06
  );
  tl.to(detailCurrent, { autoAlpha: 0, y: outY * 0.7, duration: 0.28 }, 0);

  tl.fromTo(
    thumbsNext,
    { autoAlpha: 0, y: inY * 0.6 },
    { autoAlpha: 1, y: 0, duration: 0.42 },
    0.08
  );
  tl.to(thumbsCurrent, { autoAlpha: 0, y: outY * 0.6, duration: 0.28 }, 0);

  return tl;
}

export function resetProjectTransitionStyles(
  currentPanels: Array<HTMLDivElement | null>,
  nextPanels: Array<HTMLDivElement | null>
) {
  gsap.set(currentPanels, { clearProps: "all" });
  gsap.set(nextPanels, { clearProps: "all" });
}
