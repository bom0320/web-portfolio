import {
  ContactFooter,
  ContactForm,
  ContactIntro,
} from "@/components/features/contact";

export default function ContactScene() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__main">
        <div className="contact-section__inner">
          <ContactIntro />

          <ContactForm />
        </div>
      </div>

      <ContactFooter />
    </section>
  );
}
