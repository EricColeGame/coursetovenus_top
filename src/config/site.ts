export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    patreon?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Course to Venus Wiki",
  shortName: "Course to Venus",
  logoText: "C",
  tagline: "Walkthroughs, Characters, Choices & Updates",
  description: "Your ultimate guide to Course to Venus! Explore a humorous near-future space adventure with ship exploration, crew relationships, choices, quests, and story progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://coursetovenus.top",
  supportEmail: "support@coursetovenus.top",
  gameUrl: "https://noteverywitch.itch.io/course-to-venus",
  heroVideoId: "tgD952JKu8Y", // Course to Venus gameplay / showcase video
  social: {
    discord: "https://discord.gg/yExfFgVVbP",
    youtube: "https://www.youtube.com/watch?v=tgD952JKu8Y",
    patreon: "https://www.patreon.com/cw/NotEveryWitch",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
