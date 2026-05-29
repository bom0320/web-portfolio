import { CONTACT_FOOTER } from "@/data/contacts";
import ContactFooterLinks from "./ContactFooterLinks";
import ContactSocialLinks from "./ContactSocialLinks";

export default function ContactFooter() {
  return (
    <footer className="contact-footer js-contact-footer">
      <div className="contact-footer__inner">
        <div className="contact-footer__main">
          <div className="contact-footer__brand">
            <a
              href={`mailto:${CONTACT_FOOTER.email}`}
              className="contact-footer__email"
            >
              {CONTACT_FOOTER.email}
            </a>

            <p className="contact-footer__description">
              {CONTACT_FOOTER.description}
            </p>
          </div>

          <ContactFooterLinks />
        </div>

        <div className="contact-footer__bottom">
          <p className="contact-footer__copyright">
            {CONTACT_FOOTER.copyright}
          </p>

          <ContactSocialLinks />
        </div>
      </div>
    </footer>
  );
}
