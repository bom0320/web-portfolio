export const CONTACT_INTRO = {
  eyebrow: "CONNECT",
  title: "CONTACT ME",
  description: [
    "좋은 경험을 함께 만들 준비가 되어 있습니다.",
    "작은 제안이나 질문도 편하게 남겨주세요.",
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
  email: "bom0320.dev@gmail.com",
  description:
    "작은 제안이나 질문부터 가벼운 커피챗까지 편하게 남겨주세요.\n확인 후 최대한 신속하게 답변드리겠습니다.",
  copyright: "© 2026 Kim Bom. All rights reserved.",
};

export const CONTACT_FOOTER_LINK_GROUPS = [
  {
    title: "Building with",
    links: [
      { label: "Flow", href: "#capability" },
      { label: "Structure", href: "#capability" },
      { label: "Motion", href: "#capability" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Blog", href: "https://velog.io/@bom_0320/posts" },
      {
        label: "Portfolio",
        href: "https://app.notion.com/p/FrontEnd-Developer-2cdbf73cc5378049ad20db08f8ea554f?source=copy_link",
      },
      { label: "GitHub", href: "https://github.com/bom0320" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:bom0320.dev@gmail.com" },
      { label: "GitHub", href: "https://github.com/bom0320" },
      { label: "Instagram", href: "https://www.instagram.com/b0m_0320/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%EB%B4%84-%EA%B9%80-971a1335a/",
      },
    ],
  },
];

export const CONTACT_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/b0m_0320/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%EB%B4%84-%EA%B9%80-971a1335a/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/bom0320",
    icon: "/icons/github.svg",
  },
];

export const CONTACT_SUBMIT_MODAL = {
  success: {
    title: "메시지가 전송되었습니다.",
    description: [
      "보내주신 내용은 확인 후 답변드리겠습니다.",
      "좋은 경험을 만드는 대화가 되길 기대합니다.",
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
