import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__hero">
        <header className="contact-section__header">
          <nav className="contact-section__nav contact-section__nav--left">
            <Link href="/">About</Link>
            <Link href="/">Work</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Shop</Link>
          </nav>

          <div className="contact-section__logo">ander dark</div>

          <nav className="contact-section__nav contact-section__nav--right">
            <Link href="/">Login</Link>
            <Link href="/">Contact</Link>
          </nav>
        </header>

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
                  <input id="firstName" name="firstName" type="text" />
                </div>

                <div className="contact-form__field">
                  <label
                    htmlFor="lastName"
                    className="contact-form__hidden-label"
                  >
                    Last Name
                  </label>
                  <input id="lastName" name="lastName" type="text" />
                </div>
              </div>

              <div className="contact-form__row contact-form__row--single">
                <div className="contact-form__field">
                  <label htmlFor="email">Email (required)</label>
                  <input id="email" name="email" type="email" />
                </div>
              </div>

              <div className="contact-form__row contact-form__row--single">
                <div className="contact-form__field">
                  <label htmlFor="message">Message (required)</label>
                  <textarea id="message" name="message" rows={4} />
                </div>
              </div>

              <button type="submit" className="contact-form__submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-section__footer-card">
        <div className="contact-section__footer-top">
          <a
            href="mailto:contact@studio.com"
            className="contact-section__footer-email"
          >
            contact@studio.com
          </a>
        </div>

        <div className="contact-section__footer-bottom">
          <div className="contact-section__footer-col">
            <p>Manhattan, New York</p>
            <p>2023</p>
          </div>

          <div className="contact-section__footer-col">
            <p>Office hours</p>
            <p>Monday - Friday 11 AM - 2 PM</p>
          </div>

          <div className="contact-section__footer-col contact-section__footer-links">
            <Link href="/">Say hello</Link>
            <Link href="/">Work with us</Link>
          </div>

          <div className="contact-section__footer-col contact-section__footer-social">
            <Link href="/">Be</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
