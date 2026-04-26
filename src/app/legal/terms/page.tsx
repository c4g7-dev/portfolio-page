import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service — c4g7",
  description: "Terms governing use of c4g7.com and related services.",
};

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of Service" updated="April 26, 2026">
      <section>
        <h3>1. Agreement</h3>
        <p>
          By accessing <strong>c4g7.com</strong> and any of its sub-services
          (collectively, the &ldquo;Site&rdquo;) you agree to these Terms. If
          you don&apos;t agree, please don&apos;t use the Site.
        </p>
      </section>

      <section>
        <h3>2. Use of the Site</h3>
        <p>You agree not to:</p>
        <ul>
          <li>attempt to disrupt, overload or probe the Site for vulnerabilities without permission;</li>
          <li>scrape content for use that is illegal or violates third-party rights;</li>
          <li>impersonate me or any other person;</li>
          <li>use the contact form to send spam, abuse, or unsolicited commercial messages.</li>
        </ul>
      </section>

      <section>
        <h3>3. Content & Intellectual Property</h3>
        <p>
          Source code published in linked repositories is licensed under the
          terms stated in each repository. Unless stated otherwise, written
          content on this Site is © {new Date().getFullYear()} c4g7. Logos and
          trademarks of third parties (GitHub, Pterodactyl, etc.) are the
          property of their respective owners.
        </p>
      </section>

      <section>
        <h3>4. Disclaimer of Warranty</h3>
        <p>
          The Site is provided <strong>as-is</strong>, without warranty of any
          kind. While I try hard to keep things online, I don&apos;t guarantee
          uninterrupted availability or error-free content.
        </p>
      </section>

      <section>
        <h3>5. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by applicable law, c4g7 shall not be
          liable for indirect, incidental, special or consequential damages
          arising from your use of the Site.
        </p>
      </section>

      <section>
        <h3>6. Third-party services</h3>
        <p>
          The Site relies on third-party providers (e.g. Vercel for hosting,
          Resend for email, GitHub for code metadata). Their respective terms
          apply alongside these.
        </p>
      </section>

      <section>
        <h3>7. Changes</h3>
        <p>
          I may update these Terms from time to time. The &ldquo;last
          updated&rdquo; date above will be revised when that happens. Material
          changes will be communicated where reasonably possible.
        </p>
      </section>

      <section>
        <h3>8. Governing Law</h3>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Germany. Mandatory consumer-protection law of your country of
          residence is unaffected.
        </p>
      </section>

      <section>
        <h3>9. Contact</h3>
        <p>
          Questions about these Terms? Email{" "}
          <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>.
        </p>
      </section>
    </LegalDoc>
  );
}
