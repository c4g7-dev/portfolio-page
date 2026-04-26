import Link from "next/link";
import { Mail, Server } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
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
        <span className="text-neutral-200">Germany 🇩🇪</span>. I build, host and
        break things on the internet — collaborating with professional teams on
        backend systems, infrastructure and the occasional weird side project.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link
            href="https://host.c4g7.com"
            target="_blank"
            rel="noreferrer"
          >
            <Server />
            Hosting Dashboard
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="https://github.com/c4g7-dev"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="mailto:hi@c4g7.com">
            <Mail />
            Get in touch
          </Link>
        </Button>
      </div>
    </section>
  );
}
