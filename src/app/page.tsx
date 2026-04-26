import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { LinksGrid } from "@/components/links-grid";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { SectionHeading } from "@/components/section-heading";
import { GithubRepos } from "@/components/github-repos";
import { ContactForm } from "@/components/contact-form";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-grid fixed inset-0 -z-10" />
      <SiteNav />
      <CommandPalette />
      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-16 sm:pt-24">
        <Hero />

        <section id="stack" className="mt-20 scroll-mt-20">
          <SectionHeading label="stack" />
          <Stack />
        </section>

        <section id="projects" className="mt-16 scroll-mt-20">
          <SectionHeading label="featured projects" />
          <Projects />
        </section>

        <section id="repos" className="mt-16 scroll-mt-20">
          <SectionHeading label="open source · github" />
          <GithubRepos />
        </section>

        <section id="links" className="mt-16 scroll-mt-20">
          <SectionHeading label="links" />
          <LinksGrid />
        </section>

        <section id="contact" className="mt-16 scroll-mt-20">
          <SectionHeading label="get in touch" />
          <ContactForm />
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
