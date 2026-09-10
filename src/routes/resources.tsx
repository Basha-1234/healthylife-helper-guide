import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, PhoneCall, Printer, ExternalLink, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";
import { CATEGORY_IDS, CONTENT } from "@/lib/content";
import { CATEGORY_IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Printable Posters & Helplines — Health Awareness" },
      {
        name: "description",
        content:
          "Free health helpline numbers, printable posters for every topic, and trusted government and WHO health websites.",
      },
      { property: "og:title", content: "Printable Posters & Helplines — Health Awareness" },
      {
        property: "og:description",
        content: "Free posters, helpline numbers and trusted health links for community volunteers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const TRUSTED = [
  { label: "Ministry of Health & Family Welfare (India)", href: "https://www.mohfw.gov.in/" },
  { label: "National Health Portal (India)", href: "https://www.nhp.gov.in/" },
  { label: "World Health Organization (WHO)", href: "https://www.who.int/" },
  { label: "Tele-MANAS Mental Health", href: "https://telemanas.mohfw.gov.in/" },
  { label: "National AIDS Control Organisation (NACO)", href: "https://naco.gov.in/" },
];

function ResourcesPage() {
  const { lang, t } = useLang();
  const ui = useUi(lang);
  const content = CONTENT[lang];

  const helplines = [
    { label: t.footer.ambulance, tel: "108" },
    { label: t.footer.healthHelpline, tel: "104" },
    { label: t.footer.mentalHelpline, tel: "14416" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 pb-10 pt-8">
      <h1 className="flex items-center gap-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        <BookOpen className="size-9 text-primary" aria-hidden="true" />
        {ui.resourcesHeading}
      </h1>
      <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{ui.resourcesIntro}</p>

      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <PhoneCall className="size-7 text-primary" aria-hidden="true" />
          {ui.helplinesHeading}
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {helplines.map((h) => (
            <li key={h.tel}>
              <a
                href={`tel:${h.tel}`}
                className="flex h-full min-h-20 flex-col justify-center rounded-4xl border-2 border-primary/30 bg-secondary/50 p-5 text-center shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="text-3xl font-extrabold text-primary">{h.tel}</span>
                <span className="mt-1 text-base font-semibold text-foreground">{h.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <Printer className="size-7 text-primary" aria-hidden="true" />
          {ui.postersHeading}
        </h2>
        <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{ui.postersIntro}</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_IDS.map((id) => (
            <li key={id}>
              <Link
                to="/topics/$topicId"
                params={{ topicId: id }}
                className="flex h-full items-center gap-4 rounded-4xl border-2 border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-secondary/70">
                  <img
                    src={CATEGORY_IMAGES[id]}
                    alt=""
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-16 object-contain"
                  />
                </span>
                <span>
                  <span className="block text-xl font-extrabold leading-snug text-foreground">
                    {content[id].title}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-2 text-base font-bold text-primary">
                    {ui.printPoster}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <ExternalLink className="size-7 text-primary" aria-hidden="true" />
          {ui.trustedHeading}
        </h2>
        <ul className="mt-4 grid gap-3">
          {TRUSTED.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex min-h-16 items-center justify-between gap-3 rounded-3xl border-2 border-border bg-card px-5 py-3 text-lg font-semibold text-foreground shadow-soft hover:bg-secondary/50"
              >
                {r.label}
                <span className="inline-flex items-center gap-2 text-base font-bold text-primary">
                  {ui.visit}
                  <ExternalLink className="size-5" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
