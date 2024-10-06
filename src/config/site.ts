type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Coding Fernando",
  description:
    "An Open Source Technical Blog platform with next.js 14 and shadcn-ui, prisma and markdown support",
  url: "http://123123",
  ogImage: "http://123123/og",
  links: {
    twitter: "http://twitter.com/coding123123",
    github: "http://github.com/coding123123",
  },
};
