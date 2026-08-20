import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

import { CONTACT_SOCIAL_LINKS } from "@/data/contacts";

export default function ContactSocialLinks() {
  return (
    <div className="contact-social">
      {CONTACT_SOCIAL_LINKS.map((link) => {
        const isEmail = link.label === "Email";

        return (
          <Link
            key={link.label}
            href={link.href}
            aria-label={isEmail ? "이메일 보내기" : link.label}
            className="contact-social__link"
            target="_blank"
            rel="noreferrer"
          >
            {isEmail ? (
              <FaEnvelope aria-hidden="true" className="contact-social__icon" />
            ) : (
              link.icon && (
                <Image
                  src={link.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="contact-social__icon"
                />
              )
            )}
          </Link>
        );
      })}
    </div>
  );
}
