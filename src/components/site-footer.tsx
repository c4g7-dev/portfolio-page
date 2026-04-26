import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="mb-10 mt-24 border-t border-white/10 pt-6"
    >
      <div className="flex flex-col items-start justify-between gap-4 text-xs text-neutral-500 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 font-mono">
          <span>© {year} c4g7</span>
          <span className="text-neutral-700">/</span>
          <span>made with care in 🇩🇪</span>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <Link
            href="https://c4g7.com/pages/terms"
            className="transition hover:text-foreground"
          >
            terms
          </Link>
          <Link
            href="https://c4g7.com/pages/privacy"
            className="transition hover:text-foreground"
          >
            privacy
          </Link>
          <Link
            href="https://c4g7.com/pages/imprint"
            className="transition hover:text-foreground"
          >
            imprint
          </Link>
          <Link
            href="mailto:hi@c4g7.com"
            className="transition hover:text-foreground"
          >
            hi@c4g7.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
