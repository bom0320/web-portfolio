import Link from "next/link";
import { CONTACT_FOOTER_LINK_GROUPS } from "@/data/contacts";

export default function ContactFooterLinks() {
  return (
    <nav className="contact-footer-links" aria-label="Contact footer links">
      {CONTACT_FOOTER_LINK_GROUPS.map((group) => (
        <div className="contact-footer-links__group" key={group.title}>
          <h3 className="contact-footer-links__title">{group.title}</h3>

          <ul className="contact-footer-links__list">
            {group.links.map((link) => (
              <li key={`${group.title}-${link.label}`}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
