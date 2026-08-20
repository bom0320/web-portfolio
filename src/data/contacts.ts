const CONTACT_EMAIL = "bom0320.dev@gmail.com";

const CONTACT_EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=bom0320.dev@gmail.com";

export const CONTACT_INTRO = {
  eyebrow: "CONNECT",
  title: "CONTACT ME",
  description: [
    "함께 만들고 싶은 제품이나 해결하고 싶은 문제가 있다면 이야기해주세요.",
    "채용·협업 제안부터 가벼운 커피챗까지 편하게 남겨주세요.",
  ],
};

export const CONTACT_PURPOSE_OPTIONS = [
  "채용 제안",
  "협업 제안",
  "프로젝트 문의",
  "커피챗",
  "기타",
];

export const CONTACT_FOOTER = {
  email: CONTACT_EMAIL,
  emailHref: CONTACT_EMAIL_URL,
  description: "채용·협업·프로젝트와 관련된 이야기는 언제든 환영합니다.",
  copyright: "© 2026 Kim Bom. All rights reserved.",
};

export const CONTACT_FOOTER_LINK_GROUPS = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Blog", href: "https://velog.io/@bom_0320/posts" },
      { label: "GitHub", href: "https://github.com/bom0320" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "Email",
        href: CONTACT_EMAIL_URL,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%EB%B4%84-%EA%B9%80-971a1335a/",
      },
    ],
  },
];

export const CONTACT_SOCIAL_LINKS = [
  {
    label: "Email",
    href: CONTACT_EMAIL_URL,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%EB%B4%84-%EA%B9%80-971a1335a/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/bom0320",
    icon: "/icons/github-basic.svg",
  },
];

export const CONTACT_SUBMIT_MODAL = {
  success: {
    title: "메시지가 전송되었습니다.",
    description: [
      "남겨주신 내용은 확인 후 답변드리겠습니다.",
      "함께 이야기해볼 수 있기를 바랍니다.",
    ],
    buttonLabel: "확인",
  },
  error: {
    title: "전송에 실패했습니다.",
    description: [
      "잠시 후 다시 시도해주세요.",
      "문제가 계속된다면 이메일로 직접 연락해주세요.",
    ],
    buttonLabel: "다시 시도하기",
  },
} as const;

export type ContactSubmitStatus = keyof typeof CONTACT_SUBMIT_MODAL;

export type ContactPurpose = (typeof CONTACT_PURPOSE_OPTIONS)[number];

export type ContactFormValues = {
  name: string;
  email: string;
  role: string;
  purpose: ContactPurpose | "";
  message: string;
};
