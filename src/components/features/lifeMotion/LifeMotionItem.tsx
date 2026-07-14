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
          quality={60}
          sizes="(max-width: 640px) 45vw, (max-width: 900px) 32vw, 24vw"
          className="life-motion__image"
        />
      </div>
    </figure>
  );
}
