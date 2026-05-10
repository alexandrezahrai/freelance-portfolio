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
  TITLE: "Web Developer in Kalamazoo, MI",
  DESCRIPTION: "Kalamazoo web developer with agency experience, including Bell's Brewery. I build fast, professional websites for small businesses at freelance prices. Get a free site audit.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Web Development Experience | Alex Zahrai",
  DESCRIPTION: "Agency and freelance web development experience, including SKYCATCHFIRE and Circa Creative Studios.",
};

export const PROJECTS: Metadata = {
  TITLE: "Web Development Portfolio | Alex Zahrai, Kalamazoo MI",
  DESCRIPTION: "Portfolio of web development projects by Alex Zahrai, a freelance web developer in Kalamazoo, MI. Clients include Bell's Brewery.",
};

export const NOT_FOUND: Metadata = {
  TITLE: "404 - Page Not Found",
  DESCRIPTION: "The page you're looking for does not exist or has been moved.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact | Alex Zahrai",
  DESCRIPTION: "Get in touch with Alex Zahrai, freelance web developer in Kalamazoo, MI. Free 30-minute website audit for local small businesses.",
};

export const SERVICES: Metadata = {
  TITLE: "Services | Alex Zahrai, Kalamazoo MI",
  DESCRIPTION: "Web design and development services for small businesses in Kalamazoo, MI — from WordPress to custom Astro builds.",
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
    TITLE: "services",
    HREF: "/services",
  },
  {
    TITLE: "contact",
    HREF: "/contact",
  },
];
