import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";
import {
  LifeMotionRow,
  createLifeMotionRows,
} from "@/components/features/lifeMotion";

const { topItems, bottomItems } = createLifeMotionRows(LIFE_MOTION_ITEMS);

export default function LifeMotionScene() {
  return (
    <section className="life-motion js-intro-life-motion" id="life">
      <div className="life-motion__enter js-life-motion-enter">
        <div className="life-motion__viewport js-life-motion-viewport">
          <div className="life-motion__canvas js-life-motion-canvas">
            <div className="life-motion__track js-life-motion-track">
              <LifeMotionRow items={topItems} position="top" />
              <LifeMotionRow items={bottomItems} position="bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
