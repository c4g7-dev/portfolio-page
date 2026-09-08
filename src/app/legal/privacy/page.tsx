import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy — c4g7",
  description: "What c4g7.com collects, why, and your rights.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" updated="September 7, 2026">
      <section>
        <h3>The short version</h3>
        <p>
          This site is intentionally lightweight on tracking. No third-party
          analytics, no advertising cookies, no behavioural profiles. Edge
          request logs and the contact form are the only places personal data
          lands.
        </p>
      </section>

      <section>
        <h3>Data controller</h3>
        <p>
          The controller within the meaning of Art. 4 (7) GDPR is:
        </p>
        <p>
          Arne Heidrich
          <br />
          Neuer Weg 1
          <br />
          09437 Börnichen
          <br />
          Germany
          <br />
          Email: <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>
        </p>
        <p>
          I have not appointed a data protection officer — the statutory
          thresholds of Art. 37 GDPR / § 38 BDSG are not met.
        </p>
      </section>

      <section>
        <h3>Hosting &amp; server logs</h3>
        <p>
          This site runs on Cloudflare Workers, operated by Cloudflare, Inc.
          (101 Townsend Street, San Francisco, CA 94107, USA) and its European
          subsidiary. Cloudflare terminates the connection and therefore
          processes the request metadata your browser transmits: IP address,
          user agent, timestamp, requested path, referrer and TLS/protocol
          details.
        </p>
        <p>
          <strong>Legal basis:</strong> Art. 6 (1)(f) GDPR. My legitimate
          interest is delivering the site reliably and defending it against
          attacks and abuse.
        </p>
        <p>
          <strong>Retention:</strong> I do not run my own web-server access log
          and I do not export, archive or analyse these requests. Worker
          invocation logs are held inside Cloudflare&apos;s observability
          platform under Cloudflare&apos;s own retention schedule — currently 3
          days on the free plan and 7 days on the paid plan — after which
          Cloudflare deletes them automatically. Aggregated, non-identifying
          traffic analytics may be retained by Cloudflare for longer.
        </p>
        <p>
          Cloudflare acts as my processor under Art. 28 GDPR on the basis of a
          data processing agreement. For transfers to the USA, Cloudflare relies
          on the EU standard contractual clauses and its certification under the
          EU–US Data Privacy Framework. Details:{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noreferrer"
          >
            cloudflare.com/privacypolicy
          </a>
          .
        </p>
      </section>

      <section>
        <h3>Contact form</h3>
        <p>
          If you use the form on this site, the following is processed: the name
          you enter, your email address, your message, and the IP address the
          request came from. The submission is delivered to my mailbox by Resend
          (Plus Five Five, Inc., San Francisco, USA) acting as my processor; the
          IP address is included in that email so I can trace abuse of the form.
        </p>
        <p>
          <strong>Legal basis:</strong> Art. 6 (1)(b) GDPR where your message
          concerns a contract or steps taken at your request; otherwise Art. 6
          (1)(f) GDPR — my legitimate interest in answering enquiries addressed
          to me. Providing the data is voluntary, but without it I can&apos;t
          reply.
        </p>
        <p>
          <strong>Retention:</strong> your message stays in my mailbox for as
          long as needed to deal with it and is deleted at the latest 12 months
          after the exchange ends, unless statutory retention periods (§ 147 AO,
          § 257 HGB) require otherwise or the conversation turned into an
          ongoing business relationship. You can ask for earlier deletion at any
          time.
        </p>
        <p>
          A hidden anti-spam field is included in the form. It is evaluated only
          for the single submission and never stored.
        </p>
      </section>

      <section>
        <h3>Contact by email</h3>
        <p>
          If you email me directly at{" "}
          <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>, I process your address,
          the content of your message and any metadata your mail client sends.
          The legal basis and the retention period are the same as for the
          contact form above. I don&apos;t pass this on to third parties beyond
          the mail providers involved in delivery, and I don&apos;t use it to
          contact you about anything other than your enquiry.
        </p>
      </section>

      <section>
        <h3>GitHub repository data</h3>
        <p>
          The repositories shown on this page are fetched from GitHub&apos;s
          public REST API <strong>by my server, not by your browser</strong>.
          Your IP address and browser are never disclosed to GitHub, Inc. by
          this site, and the response is cached at the edge. Legal basis: Art. 6
          (1)(f) GDPR — presenting my own work.
        </p>
      </section>

      <section>
        <h3>Status data</h3>
        <p>
          The live status figures come from my own Uptime Kuma instance at{" "}
          <a
            href="https://status.c4g7.com"
            target="_blank"
            rel="noreferrer"
          >
            status.c4g7.com
          </a>
          , proxied through this site&apos;s server. As with the GitHub data,
          your browser never talks to that host directly.
        </p>
      </section>

      <section>
        <h3>What is NOT collected</h3>
        <ul>
          <li>No advertising cookies.</li>
          <li>No third-party trackers (Google Analytics, Meta Pixel, etc.).</li>
          <li>No browser fingerprinting.</li>
          <li>No user accounts, no newsletter, no profiling.</li>
          <li>
            No cookies are set by this site for consent-requiring purposes, so
            no cookie banner is shown.
          </li>
        </ul>
      </section>

      <section>
        <h3>Recipients</h3>
        <ul>
          <li>
            <strong>Cloudflare, Inc.</strong> — hosting and edge delivery
            (processor).
          </li>
          <li>
            <strong>Plus Five Five, Inc. (Resend)</strong> — delivery of contact
            form messages (processor). Transfers to the USA are covered by the
            EU standard contractual clauses.
          </li>
          <li>
            <strong>GitHub, Inc.</strong> — queried by my server only; receives
            no data about you.
          </li>
        </ul>
        <p>
          Beyond these, data is passed on only where I&apos;m legally obliged to
          do so.
        </p>
      </section>

      <section>
        <h3>Your rights</h3>
        <p>
          Under the GDPR you have the right to information (Art. 15),
          rectification (Art. 16), erasure (Art. 17), restriction of processing
          (Art. 18), data portability (Art. 20) and — where processing rests on
          Art. 6 (1)(f) —{" "}
          <strong>to object at any time on grounds relating to your
          particular situation</strong> (Art. 21). To exercise any of these,
          email <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>.
        </p>
        <p>
          You also have the right to lodge a complaint with a supervisory
          authority (Art. 77 GDPR). The authority responsible for me is the{" "}
          <a
            href="https://www.saechsdsb.de/"
            target="_blank"
            rel="noreferrer"
          >
            Sächsische Datenschutzbeauftragte
          </a>
          , but you may also contact the authority where you live or work.
        </p>
      </section>

      <section>
        <h3>Changes</h3>
        <p>
          I&apos;ll update this page when practices change. The &ldquo;last
          updated&rdquo; date above always reflects the latest revision.
        </p>
      </section>
    </LegalDoc>
  );
}
