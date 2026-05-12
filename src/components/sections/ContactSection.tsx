"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactTitle from "@/components/contact/ContactTitle";
import { createContactTitleAnimation } from "@/components/animations/contact";
import {
  CONTACT_FOOTER,
  CONTACT_FORM,
  CONTACT_HERO,
  CONTACT_SOCIAL_LINKS,
} from "@/data/contacts";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const fillGroup = fillGroupRef.current;

    if (!section || !fillGroup) return;

    const ctx = gsap.context(() => {
      const tl = createContactTitleAnimation({ fillGroup });

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        animation: tl,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="contact-section">
      <div className="contact-section__pin">
        <div className="contact-section__hero">
          <div className="contact-section__inner">
            <ContactTitle fillGroupRef={fillGroupRef} />

            <div className="contact-section__content">
              <aside className="contact-section__info">
                <a
                  href={`mailto:${CONTACT_HERO.email}`}
                  className="contact-section__info-link"
                >
                  {CONTACT_HERO.email}
                </a>

                <a
                  href={CONTACT_HERO.phoneHref}
                  className="contact-section__info-link"
                >
                  {CONTACT_HERO.phone}
                </a>

                <address className="contact-section__address">
                  {CONTACT_HERO.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </aside>

              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="firstName">{CONTACT_FORM.nameLabel}</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder={CONTACT_FORM.firstNamePlaceholder}
                    />
                  </div>

                  <div className="contact-form__field">
                    <label
                      htmlFor="lastName"
                      className="contact-form__label contact-form__label--hidden"
                    >
                      {CONTACT_FORM.nameLabel}
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder={CONTACT_FORM.lastNamePlaceholder}
                    />
                  </div>
                </div>

                <div className="contact-form__row contact-form__row--single">
                  <div className="contact-form__field">
                    <label htmlFor="email">{CONTACT_FORM.emailLabel}</label>
                    <input id="email" name="email" type="email" />
                  </div>
                </div>

                <div className="contact-form__row contact-form__row--single">
                  <div className="contact-form__field">
                    <label htmlFor="message">{CONTACT_FORM.messageLabel}</label>
                    <textarea id="message" name="message" rows={4} />
                  </div>
                </div>

                <button type="submit" className="contact-form__submit">
                  {CONTACT_FORM.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="contact-footer__top">
          <a
            href={`mailto:${CONTACT_FOOTER.email}`}
            className="contact-footer__email"
          >
            {CONTACT_FOOTER.email}
          </a>
        </div>

        <div className="contact-footer__bottom">
          <div className="contact-footer__meta">
            <div className="contact-footer__location">
              <p>{CONTACT_FOOTER.location}</p>
              <p>{CONTACT_FOOTER.year}</p>
            </div>

            <p className="contact-footer__copyright">
              {CONTACT_FOOTER.copyrightPrefix}{" "}
              <Link href="/">{CONTACT_FOOTER.copyrightLinkLabel}</Link>{" "}
              {CONTACT_FOOTER.copyrightSuffix}
            </p>
          </div>

          <div className="contact-footer__hours">
            <p className="contact-footer__label">
              {CONTACT_FOOTER.officeHoursLabel}
            </p>
            <p>{CONTACT_FOOTER.officeHours}</p>
          </div>

          <div className="contact-footer__links">
            {CONTACT_FOOTER.links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="contact-footer__social">
            {CONTACT_SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <Link key={link.label} href={link.href} aria-label={link.label}>
                  {Icon ? <Icon /> : link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
