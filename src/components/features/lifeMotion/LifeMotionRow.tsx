import type { LifeMotionItem as LifeMotionItemData } from "@/data/lifeMotions";

import LifeMotionItem from "./LifeMotionItem";

type LifeMotionRowProps = {
  items: LifeMotionItemData[];
  position: "top" | "bottom";
};

export default function LifeMotionRow({ items, position }: LifeMotionRowProps) {
  return (
    <div
      className={`life-motion__row-window life-motion__row-window--${position} js-life-motion-${position}`}
    >
      <div className="life-motion__row">
        <div className="life-motion__group">
          {items.map((item) => (
            <LifeMotionItem key={item.id} item={item} />
          ))}
        </div>

        <div className="life-motion__group" aria-hidden="true">
          {items.map((item) => (
            <LifeMotionItem key={`clone-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
