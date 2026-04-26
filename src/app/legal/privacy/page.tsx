import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy — c4g7",
  description: "What c4g7.com collects, why, and your rights.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" updated="April 26, 2026">
      <section>
        <h3>The short version</h3>
        <p>
          This site is intentionally lightweight on tracking. No third-party
          analytics, no advertising cookies, no behavioural profiles.
          Server logs and the contact form are the only places personal data
          may briefly land.
        </p>
      </section>

      <section>
        <h3>Data controller</h3>
        <p>
          The data controller within the meaning of Art. 4(7) GDPR is the
          natural person identified in the <a href="/legal/imprint">Imprint</a>.
          Contact: <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>.
        </p>
      </section>

      <section>
        <h3>What is collected</h3>
        <ul>
          <li>
            <strong>Server logs</strong> (legal basis: Art. 6(1)(f) GDPR —
            legitimate interest in operating the site): IP address, user-agent,
            timestamp, requested path, referrer. Retained at most 14 days unless
            needed to investigate abuse.
          </li>
          <li>
            <strong>Contact form</strong> (legal basis: Art. 6(1)(b) GDPR —
            taking steps at your request): name, email and the message you send.
            Stored only for as long as necessary to handle your inquiry.
          </li>
          <li>
            <strong>GitHub data</strong>: when you load this page, it fetches
            public metadata about my GitHub repos directly from GitHub&apos;s
            API. No personal data of yours is sent to GitHub by my server.
          </li>
        </ul>
      </section>

      <section>
        <h3>What is NOT collected</h3>
        <ul>
          <li>No advertising cookies.</li>
          <li>No third-party trackers (Google Analytics, Meta Pixel, etc.).</li>
          <li>No browser fingerprinting.</li>
          <li>No persistent first-party cookies (only short-lived session cookies if technically required).</li>
        </ul>
      </section>

      <section>
        <h3>Service providers</h3>
        <ul>
          <li>
            <strong>Hosting (Vercel Inc., USA)</strong> — processes server logs
            on my behalf under a Data Processing Agreement and standard
            contractual clauses.
          </li>
          <li>
            <strong>Email delivery (Resend)</strong> — used to deliver messages
            sent through the contact form.
          </li>
          <li>
            <strong>GitHub Inc.</strong> — public API used to display repo
            metadata; no personal data is shared with GitHub by this site.
          </li>
        </ul>
      </section>

      <section>
        <h3>Your rights</h3>
        <p>
          Under the GDPR you have the right to access, rectify, erase, restrict
          or object to processing, plus the right to data portability and to
          lodge a complaint with a supervisory authority. To exercise any of
          these, email <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>.
        </p>
      </section>

      <section>
        <h3>Changes</h3>
        <p>
          I&apos;ll update this page when practices change. The
          &ldquo;last updated&rdquo; date above always reflects the latest
          revision.
        </p>
      </section>
    </LegalDoc>
  );
}
