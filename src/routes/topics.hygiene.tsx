import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, X, CircleDot, Sparkles } from "lucide-react";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";
import { CONTENT } from "@/lib/content";
import { CATEGORY_IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/topics/hygiene")({
  head: () => ({
    meta: [
      { title: "Personal Hygiene — Health Awareness" },
      {
        name: "description",
        content:
          "Simple personal hygiene tips for a healthy family: hand washing, clean water, safe food and toilet habits.",
      },
      { property: "og:title", content: "Personal Hygiene — Health Awareness" },
      {
        property: "og:description",
        content: "Wash hands, drink clean water, keep food safe and stay clean every day.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HygienePage,
});

function HygienePage() {
  const { lang } = useLang();
  const ui = useUi(lang);
  const c = CONTENT[lang].hygiene;

  const speech = [c.title, c.story, ui.tipsTitle, ...c.tips].join(". ");

  return (
    <main className="mx-auto max-w-4xl px-4 pb-8 pt-6">
      <Link
        to="/topics"
        className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-primary hover:underline"
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
        {ui.backToTopics}
      </Link>

      {/* Header with image */}
      <header className="mt-4 flex flex-col items-center gap-4 rounded-4xl border-2 border-border bg-card p-6 text-center shadow-soft sm:flex-row sm:text-left">
        <span className="flex size-36 shrink-0 items-center justify-center rounded-full bg-secondary/70">
          <img
            src={CATEGORY_IMAGES.hygiene}
            alt=""
            width={512}
            height={512}
            className="size-32 object-contain"
          />
        </span>
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">{c.title}</h1>
          <p className="mt-2 text-xl leading-relaxed text-muted-foreground">{c.desc}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <SpeakButton text={speech} />
          </div>
        </div>
      </header>

      {/* Story */}
      <section className="mt-8 rounded-4xl border-2 border-border bg-secondary/40 p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.whyMatters}</h2>
        <p className="mt-3 text-xl leading-relaxed text-foreground">{c.story}</p>
      </section>

      {/* 4 tips with small icons */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.tipsTitle}</h2>
        <ul className="mt-4 grid gap-4">
          {c.tips.slice(0, 4).map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-4 rounded-3xl border-2 border-border bg-card p-5 shadow-soft"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/70">
                <CircleDot className="size-6 text-primary" aria-hidden="true" />
              </span>
              <span className="text-xl leading-relaxed text-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Do's and Don'ts table */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.mythTitle}</h2>
        <div className="mt-4 overflow-hidden rounded-4xl border-2 border-border bg-card shadow-soft">
          <div className="grid sm:grid-cols-2">
            {/* Do's column */}
            <div className="border-b-2 border-border p-5 sm:border-b-0 sm:border-r-2">
              <h3 className="flex items-center gap-2 text-xl font-extrabold text-foreground">
                <Check className="size-7 text-primary" aria-hidden="true" />
                {ui.dosTitle}
              </h3>
              <ul className="mt-4 grid gap-3">
                {c.dos.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
                    <Sparkles className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts column */}
            <div className="p-5">
              <h3 className="flex items-center gap-2 text-xl font-extrabold text-foreground">
                <X className="size-7 text-destructive" aria-hidden="true" />
                {ui.dontsTitle}
              </h3>
              <ul className="mt-4 grid gap-3">
                {c.donts.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
                    <X className="mt-1 size-5 shrink-0 text-destructive" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
