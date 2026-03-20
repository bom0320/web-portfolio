import { IconType } from "react-icons";
import { FaBehance } from "react-icons/fa";
import { FiInstagram, FiFacebook } from "react-icons/fi";

export const CONTACT_HERO = {
  title: "CONTACT ME",
  email: "email@example.com",
  phone: "(555) 555-5555",
  phoneHref: "tel:5555555555",
  address: ["123 Demo Street", "New York, NY 12345"],
};

export const CONTACT_FORM = {
  nameLabel: "Name (required)",
  firstNamePlaceholder: "First Name",
  lastNamePlaceholder: "Last Name",
  emailLabel: "Email (required)",
  messageLabel: "Message (required)",
  submitLabel: "SUBMIT",
};

export const CONTACT_FOOTER = {
  email: "contact@studio.com",
  location: "Manhattan, New York",
  year: "2023",
  officeHoursLabel: "Office hours",
  officeHours: "Monday - Friday 11 AM - 2 PM",
  copyrightPrefix: "© 2023 Template by",
  copyrightLinkLabel: "Produlis Studio",
  copyrightSuffix: "| Photos from pexels.com",
  links: [
    { href: "/", label: "Say hello" },
    { href: "/", label: "Work with us" },
  ],
};

export interface ContactSocialLink {
  href: string;
  label: string;
  icon?: IconType;
}

export const CONTACT_SOCIAL_LINKS: ContactSocialLink[] = [
  { href: "/", label: "Behance", icon: FaBehance },
  { href: "/", label: "Instagram", icon: FiInstagram },
  { href: "/", label: "Facebook", icon: FiFacebook },
  { href: "/", label: "Privacy Policy" },
];
