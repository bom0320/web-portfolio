import Image from "next/image";
import Link from "next/link";
import { CONTACT_SOCIAL_LINKS } from "@/data/contacts";

export default function ContactSocialLinks() {
  return (
    <div className="contact-social">
      {CONTACT_SOCIAL_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="contact-social__link"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={link.icon}
            alt=""
            width={24}
            height={24}
            className="contact-social__icon"
          />
        </Link>
      ))}
    </div>
  );
}
