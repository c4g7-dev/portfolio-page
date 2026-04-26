"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  FolderGit2,
  Home,
  Mail,
  Server,
  Sparkles,
  User,
  Clock,
  Scale,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "/" && document.activeElement === document.body) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(href: string, external = false) {
    setOpen(false);
    if (external) window.open(href, "_blank", "noopener,noreferrer");
    else if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else router.push(href);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type to search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go("/")}>
            <Home /> Home
            <CommandShortcut>g h</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => go("/now")}>
            <Clock /> /now
            <CommandShortcut>g n</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => go("#projects")}>
            <Sparkles /> Projects
          </CommandItem>
          <CommandItem onSelect={() => go("#repos")}>
            <FolderGit2 /> GitHub repos
          </CommandItem>
          <CommandItem onSelect={() => go("#contact")}>
            <Mail /> Contact
          </CommandItem>
          <CommandItem onSelect={() => go("/legal/terms")}>
            <Scale /> Legal
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="External">
          <CommandItem onSelect={() => go("https://host.c4g7.com", true)}>
            <Server /> Hosting Dashboard
          </CommandItem>
          <CommandItem onSelect={() => go("https://status.c4g7.com", true)}>
            <Activity /> Status Page
          </CommandItem>
          <CommandItem onSelect={() => go("https://bio.c4g7.com", true)}>
            <User /> Bio
          </CommandItem>
          <CommandItem onSelect={() => go("https://github.com/c4g7-dev", true)}>
            <GithubIcon /> GitHub
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
