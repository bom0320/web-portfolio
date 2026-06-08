import Image from "next/image";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";

type LifeMotionItemData = (typeof LIFE_MOTION_ITEMS)[number];

type LifeMotionItemProps = {
  item: LifeMotionItemData;
  index: number;
};

export default function LifeMotionItem({ item, index }: LifeMotionItemProps) {
  const shouldPreload = index < 8;

  return (
    <figure className="life-motion__item">
      <p className="life-motion__title">{item.title}</p>

      <div className="life-motion__image-wrap">
        <Image
          src={item.src}
          alt={item.title}
          fill
          priority={shouldPreload}
          loading={shouldPreload ? undefined : "lazy"}
          sizes="(max-width: 640px) 45vw, (max-width: 900px) 32vw, 24vw"
          className="life-motion__image"
        />
      </div>
    </figure>
  );
}
