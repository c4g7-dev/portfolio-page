import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Imprint — c4g7",
  description: "Imprint per § 5 TMG.",
};

export default function ImprintPage() {
  return (
    <LegalDoc title="Imprint" updated="April 26, 2026">
      <section>
        <h3>Information per § 5 TMG</h3>
        <p>
          c4g7 (private individual)
          <br />
          Germany
        </p>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:hi@c4g7.com">hi@c4g7.com</a>
          <br />
          Web: <a href="https://c4g7.com">c4g7.com</a>
        </p>
      </section>

      <section>
        <h3>Responsible for content per § 55 (2) RStV</h3>
        <p>c4g7 — address available on request.</p>
      </section>

      <section>
        <h3>EU dispute resolution</h3>
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR):{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          . I&apos;m not obliged and not willing to participate in dispute
          resolution proceedings before a consumer arbitration board.
        </p>
      </section>

      <section>
        <h3>Liability for content</h3>
        <p>
          As a service provider I&apos;m responsible for my own content on
          these pages according to § 7 (1) TMG and general law. According to
          §§ 8–10 TMG I&apos;m, however, not under obligation to monitor
          transmitted or stored third-party information, or to investigate
          circumstances pointing to illegal activity.
        </p>
      </section>

      <section>
        <h3>Liability for links</h3>
        <p>
          This site contains links to external websites of third parties, on
          whose contents I have no influence. Therefore I cannot assume any
          liability for these external contents. The respective provider or
          operator of the linked pages is always responsible for the contents
          of those pages.
        </p>
      </section>

      <section>
        <h3>Copyright</h3>
        <p>
          The contents and works on these pages created by the site operator
          are subject to German copyright law. Duplication, processing,
          distribution and any kind of exploitation outside the limits of
          copyright require the written consent of the respective author or
          creator.
        </p>
      </section>
    </LegalDoc>
  );
}
