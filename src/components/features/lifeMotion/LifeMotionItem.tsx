import Image from "next/image";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";

type LifeMotionItemData = (typeof LIFE_MOTION_ITEMS)[number];

type LifeMotionItemProps = {
  item: LifeMotionItemData;
};

export default function LifeMotionItem({ item }: LifeMotionItemProps) {
  return (
    <figure className="life-motion__item">
      <p className="life-motion__title">{item.title}</p>

      <div className="life-motion__image-wrap">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="life-motion__image"
          sizes="420px"
        />
      </div>
    </figure>
  );
}
