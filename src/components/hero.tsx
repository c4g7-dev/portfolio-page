import Link from "next/link";
import { Mail, Server } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { FlagDE } from "@/components/icons/flag-de";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/status-indicator";

export function Hero() {
  return (
    <section className="stagger">
      <StatusPill />

      <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl">
        <span className="shimmer-text">Arne</span>
        <span className="text-neutral-500"> — </span>
        <span className="font-serif font-light italic text-neutral-200">
          aka
        </span>{" "}
        <span className="font-mono text-4xl text-foreground sm:text-6xl">
          c4g7
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Developer &amp; server specialist based in{" "}
        <span className="inline-flex items-center gap-1.5 text-neutral-200">
          Germany <FlagDE />
        </span>
        . I build, host and
        break things on the internet — collaborating with professional teams on
        backend systems, infrastructure and the occasional weird side project.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="btn-sheen group">
          <Link
            href="https://host.c4g7.com"
            target="_blank"
            rel="noreferrer"
          >
            <Server className="transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" />
            Hosting Dashboard
            <span
              aria-hidden
              className="ml-0.5 inline-block translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            >
              →
            </span>
          </Link>
        </Button>
        <Button asChild variant="outline" className="btn-sheen group">
          <Link
            href="https://github.com/c4g7-dev"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="transition-transform duration-500 [transform-origin:center] group-hover:rotate-[360deg]" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="ghost" className="btn-sheen group">
          <Link href="mailto:hi@c4g7.com">
            <Mail className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]" />
            <span className="relative">
              Get in touch
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-[width] duration-300 group-hover:w-full"
              />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
