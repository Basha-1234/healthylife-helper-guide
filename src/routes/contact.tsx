import { createFileRoute } from "@tanstack/react-router";
import { Phone, Users, Mail, MapPin, PhoneCall, Heart } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Helplines — Health Awareness" },
      {
        name: "description",
        content:
          "Free health helpline numbers, how to reach your nearest health centre, and how to contact our community service volunteers.",
      },
      { property: "og:title", content: "Contact & Helplines — Health Awareness" },
      {
        property: "og:description",
        content: "Helpline numbers, nearest health centre guidance and contact details for our project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang, t } = useLang();
  const ui = useUi(lang);

  const helplines = [
    { label: t.footer.ambulance, tel: "108" },
    { label: t.footer.healthHelpline, tel: "104" },
    { label: t.footer.mentalHelpline, tel: "14416" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 pb-10 pt-8">
      <h1 className="flex items-center gap-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        <Phone className="size-9 text-primary" aria-hidden="true" />
        {ui.contactHeading}
      </h1>
      <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{ui.contactIntro}</p>

      <section className="mt-8 rounded-4xl border-2 border-border bg-secondary/40 p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <Users className="size-7 text-primary" aria-hidden="true" />
          {ui.contactWhoHeading}
        </h2>
        <p className="mt-3 text-xl leading-relaxed text-foreground">{ui.contactWho}</p>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        <a
          href="tel:104"
          className="flex min-h-32 flex-col justify-center rounded-4xl border-2 border-primary/30 bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1"
        >
          <PhoneCall className="mx-auto size-9 text-primary" aria-hidden="true" />
          <span className="mt-2 text-xl font-extrabold text-foreground">{ui.callHelpline}</span>
          <span className="mt-1 text-2xl font-extrabold text-primary">104</span>
        </a>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.helplinesHeading}</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {helplines.map((h) => (
            <li key={h.tel}>
              <a
                href={`tel:${h.tel}`}
                className="flex h-full min-h-20 flex-col justify-center rounded-4xl border-2 border-border bg-secondary/50 p-5 text-center shadow-soft hover:bg-secondary"
              >
                <span className="text-3xl font-extrabold text-primary">{h.tel}</span>
                <span className="mt-1 text-base font-semibold text-foreground">{h.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-4xl border-2 border-border bg-card p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <MapPin className="size-7 text-primary" aria-hidden="true" />
          {ui.nearestCentre}
        </h2>
        <p className="mt-3 text-xl leading-relaxed text-foreground">{ui.nearestCentreText}</p>
      </section>
    </main>
  );
}
