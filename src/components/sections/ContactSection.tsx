import Link from "next/link";
import { FaBehance } from "react-icons/fa";
import { FiInstagram, FiFacebook } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__hero">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">CONTACT ME</h2>

          <div className="contact-section__content">
            <aside className="contact-section__info">
              <a
                href="mailto:email@example.com"
                className="contact-section__info-link"
              >
                email@example.com
              </a>

              <a href="tel:5555555555" className="contact-section__info-link">
                (555) 555-5555
              </a>

              <address className="contact-section__address">
                123 Demo Street
                <br />
                New York, NY 12345
              </address>
            </aside>

            <form className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="firstName">Name (required)</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>

                <div className="contact-form__field">
                  <label
                    htmlFor="lastName"
                    className="contact-form__label contact-form__label--hidden"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="contact-form__row contact-form__row--single">
                <div className="contact-form__field">
                  <label htmlFor="email">Email (required)</label>
                  <input id="email" name="email" type="email" placeholder="" />
                </div>
              </div>

              <div className="contact-form__row contact-form__row--single">
                <div className="contact-form__field">
                  <label htmlFor="message">Message (required)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=""
                  />
                </div>
              </div>

              <button type="submit" className="contact-form__submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="contact-footer__top">
          <a href="mailto:contact@studio.com" className="contact-footer__email">
            contact@studio.com
          </a>
        </div>

        <div className="contact-footer__bottom">
          <div className="contact-footer__meta">
            <div className="contact-footer__location">
              <p>Manhattan, New York</p>
              <p>2023</p>
            </div>

            <p className="contact-footer__copyright">
              © 2023 Template by <Link href="/">Produlis Studio</Link> | Photos
              from pexels.com
            </p>
          </div>

          <div className="contact-footer__hours">
            <p className="contact-footer__label">Office hours</p>
            <p>Monday - Friday 11 AM - 2 PM</p>
          </div>

          <div className="contact-footer__links">
            <Link href="/">Say hello</Link>
            <Link href="/">Work with us</Link>
          </div>

          <div className="contact-footer__social">
            <Link href="/" aria-label="Behance">
              <FaBehance />
            </Link>
            <Link href="/" aria-label="Instagram">
              <FiInstagram />
            </Link>
            <Link href="/" aria-label="Facebook">
              <FiFacebook />
            </Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
