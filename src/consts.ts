import type { Site, Metadata, Socials, NavItems } from "@types";

export const SITE: Site = {
  NAME: "Alex Zahrai",
  JOB_TITLE: "Web Developer",
  BIO: "US-based, design-focused web developer specializing in crafting clean, responsive, and user-friendly websites and web apps that showcase brands and effortlessly engage audiences. Passionate about interface design, with a strong commitment to detail, delivering exceptional experiences that bring visions to life.",
  EMAIL: "alexandrezahrai@protonmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Alex's personal website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const NOT_FOUND: Metadata = {
  TITLE: "404 - Page Not Found",
  DESCRIPTION: "The page you're looking for does not exist or has been moved.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/alexandrezahrai",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/alexandre-zahrai/",
  },
];

export const NAVITEMS: NavItems = [
  {
    TITLE: "projects",
    HREF: "/projects",
  },
  {
    TITLE: "work",
    HREF: "/work",
  },
  {
    TITLE: "resume",
    HREF: "Resume_Alexandre_Zahrai.pdf",
    TARGET: "external",
  },
];
