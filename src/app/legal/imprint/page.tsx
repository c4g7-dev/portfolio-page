import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Imprint — c4g7",
  description: "Imprint per § 5 DDG.",
};

export default function ImprintPage() {
  return (
    <LegalDoc title="Imprint" updated="September 7, 2026">
      <section>
        <h3>Information per § 5 DDG</h3>
        <p>
          Arne Heidrich
          <br />
          Neuer Weg 1
          <br />
          09437 Börnichen
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
        <h3>Responsible for content per § 18 (2) MStV</h3>
        <p>
          Arne Heidrich, Neuer Weg 1, 09437 Börnichen, Germany.
        </p>
      </section>

      <section>
        <h3>Consumer dispute resolution</h3>
        <p>
          I&apos;m neither obliged nor willing to participate in dispute
          resolution proceedings before a consumer arbitration board
          (Verbraucherschlichtungsstelle).
        </p>
        <p>
          The European Commission&apos;s Online Dispute Resolution platform was
          shut down on 20 July 2025 under Regulation (EU) 2024/3228, so no link
          to it is given here.
        </p>
      </section>

      <section>
        <h3>Liability for content</h3>
        <p>
          As a service provider I&apos;m responsible for my own content on these
          pages according to § 7 (1) DDG and general law. According to §§ 8–10
          DDG and Art. 4–6 of Regulation (EU) 2022/2065 (Digital Services Act)
          I&apos;m, however, not under obligation to monitor transmitted or
          stored third-party information, or to investigate circumstances
          pointing to illegal activity.
        </p>
      </section>

      <section>
        <h3>Liability for links</h3>
        <p>
          This site contains links to external websites of third parties, on
          whose contents I have no influence. Therefore I cannot assume any
          liability for these external contents. The respective provider or
          operator of the linked pages is always responsible for the contents of
          those pages.
        </p>
      </section>

      <section>
        <h3>Copyright</h3>
        <p>
          The contents and works on these pages created by the site operator are
          subject to German copyright law. Duplication, processing, distribution
          and any kind of exploitation outside the limits of copyright require
          the written consent of the respective author or creator.
        </p>
      </section>
    </LegalDoc>
  );
}
