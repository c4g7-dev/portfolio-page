import type * as React from "react";
import {
  Server,
  Activity,
  User,
  Mail,
  ExternalLink,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github";

type IconComponent =
  | LucideIcon
  | ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element);

export type LinkItem = {
  title: string;
  description: string;
  href: string;
  domain: string;
  icon: IconComponent;
  external?: boolean;
};

export const LINKS: LinkItem[] = [
  {
    title: "Bio",
    description: "A small page with a bit more about me.",
    href: "https://bio.c4g7.com",
    domain: "bio.c4g7.com",
    icon: User,
  },
  {
    title: "Hosting",
    description: "My server & game-host control panel.",
    href: "https://host.c4g7.com",
    domain: "host.c4g7.com",
    icon: Server,
  },
  {
    title: "Status",
    description: "Uptime & live health of all my services.",
    href: "https://status.c4g7.com",
    domain: "status.c4g7.com",
    icon: Activity,
  },
  {
    title: "/now",
    description: "What I'm focused on right now.",
    href: "/now",
    domain: "c4g7.com/now",
    icon: Boxes,
  },
  {
    title: "GitHub",
    description: "Code, repos and the occasional pull request.",
    href: "https://github.com/c4g7-dev",
    domain: "@c4g7-dev",
    icon: GithubIcon,
    external: true,
  },
  {
    title: "Contact",
    description: "Drop me a line — I usually reply quickly.",
    href: "mailto:hi@c4g7.com",
    domain: "hi@c4g7.com",
    icon: Mail,
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  tags: string[];
  status: "live" | "wip" | "archived";
};

export const PROJECTS: Project[] = [
  {
    name: "c4g7.Host",
    tagline: "Game & app hosting platform",
    description:
      "Multi-region game server and application hosting with a custom panel, automated deployments and DDoS-protected edge.",
    href: "https://host.c4g7.com",
    tags: ["Pterodactyl", "Node", "Linux", "Edge"],
    status: "live",
  },
  {
    name: "Status Network",
    tagline: "Real-time service health",
    description:
      "Distributed Uptime monitoring across 5 EU & US locations watching over hosts, databases, edge proxies and more.",
    href: "https://status.c4g7.com",
    tags: ["Uptime Kuma", "Monitoring", "Multi-region"],
    status: "live",
  },
  {
    name: "c4g7.bio",
    tagline: "Personal bio page",
    description:
      "The legacy bio site — a quick window into who I am, what I do, and where to find me.",
    href: "https://bio.c4g7.com",
    tags: ["Web", "Personal"],
    status: "live",
  },
  {
    name: "More on GitHub",
    tagline: "Open-source experiments",
    description:
      "Backend tools, small libs and prototypes — Java, Python and TypeScript playgrounds.",
    href: "https://github.com/c4g7-dev",
    tags: ["Java", "Python", "TypeScript"],
    status: "wip",
  },
];

export const STACK = [
  "java",
  "sql",
  "python",
  "typescript",
  "node.js",
  "linux",
  "docker",
  "infrastructure",
];

export const ICON_EXTERNAL = ExternalLink;
