import { PhoneCall, ExternalLink, Heart } from "lucide-react";
import { useLang } from "@/lib/i18n";

const RESOURCES = [
  { label: "Ministry of Health & Family Welfare (India)", href: "https://www.mohfw.gov.in/" },
  { label: "National Health Portal — MyGov Health", href: "https://www.nhp.gov.in/" },
  { label: "World Health Organization (WHO)", href: "https://www.who.int/" },
  { label: "Tele-MANAS Mental Health", href: "https://telemanas.mohfw.gov.in/" },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-16 border-t-4 border-primary/15 bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <section>
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-foreground">
            <PhoneCall className="size-6 text-primary" aria-hidden="true" />
            {t.footer.helpline}
          </h2>
          <p className="mt-1 text-base text-muted-foreground">{t.footer.helplineText}</p>
          <ul className="mt-3 space-y-2 text-lg font-bold text-foreground">
            <li>
              <a className="underline decoration-primary/40" href="tel:108">
                {t.footer.ambulance}
              </a>
            </li>
            <li>
              <a className="underline decoration-primary/40" href="tel:104">
                {t.footer.healthHelpline}
              </a>
            </li>
            <li>
              <a className="underline decoration-primary/40" href="tel:14416">
                {t.footer.mentalHelpline}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-extrabold text-foreground">{t.footer.resources}</h2>
          <ul className="mt-3 space-y-2">
            {RESOURCES.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-foreground underline decoration-primary/40"
                >
                  <ExternalLink className="size-5 text-primary" aria-hidden="true" />
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-t-2 border-border/70 px-4 py-5 text-center">
        <p className="text-base font-semibold text-muted-foreground">
          {t.siteName} — {t.tagline}
        </p>
      </div>
    </footer>
  );
}
