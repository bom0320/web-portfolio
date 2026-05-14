import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="hero__visual">
      <div className="hero__character js-hero-character">
        <Image
          src="/images/character_1.png"
          alt="hero character"
          fill
          priority
        />
      </div>
    </div>
  );
}
