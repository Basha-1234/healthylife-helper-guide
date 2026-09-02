import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight, HelpCircle } from "lucide-react";
import { DailyTip } from "@/components/DailyTip";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang, type CategoryId } from "@/lib/i18n";
import heroFamily from "@/assets/hero-family.jpg";
import catHygiene from "@/assets/cat-hygiene.png";
import catMosquito from "@/assets/cat-mosquito.png";
import catNutrition from "@/assets/cat-nutrition.png";
import catMind from "@/assets/cat-mind.png";
import catDisease from "@/assets/cat-disease.png";
import catWomen from "@/assets/cat-women.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Health Awareness — A Healthy Family, A Happy Family" },
      {
        name: "description",
        content:
          "Simple health tips in English, Hindi and Telugu: hygiene, mosquito safety, food, mind care, disease facts and family health.",
      },
      { property: "og:title", content: "Health Awareness — A Healthy Family, A Happy Family" },
      {
        property: "og:description",
        content:
          "Easy, picture-first health awareness for every family. Read aloud, in your language, free for all.",
      },
    ],
  }),
  component: Home,
});

const CATEGORY_ORDER: { id: CategoryId; img: string; keywords: string[] }[] = [
  {
    id: "hygiene",
    img: catHygiene,
    keywords: ["hygiene", "hand", "soap", "water", "clean", "साफ", "हाथ", "पानी", "శుభ్రత", "నీరు", "చేతులు"],
  },
  {
    id: "mosquito",
    img: catMosquito,
    keywords: ["mosquito", "dengue", "malaria", "drain", "मच्छर", "डेंगू", "दोమ", "దోమ", "డెంగీ"],
  },
  {
    id: "nutrition",
    img: catNutrition,
    keywords: ["food", "nutrition", "diet", "fruit", "vegetable", "खाना", "भोजन", "फल", "ఆహారం", "పండ్లు"],
  },
  {
    id: "mind",
    img: catMind,
    keywords: ["mind", "stress", "sleep", "rest", "मन", "नींद", "तनाव", "మనసు", "నిద్ర"],
  },
  {
    id: "disease",
    img: catDisease,
    keywords: ["disease", "hiv", "aids", "fever", "myth", "बीमारी", "बुखार", "వ్యాధి", "జ్వరం"],
  },
  {
    id: "women",
    img: catWomen,
    keywords: ["women", "mother", "baby", "girl", "महिला", "माँ", "बच्चा", "మహిళ", "తల్లి", "బిడ్డ"],
  },
];

function Home() {
  const { t } = useLang();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORY_ORDER;
    return CATEGORY_ORDER.filter((c) => {
      const info = t.categories[c.id];
      return (
        info.title.toLowerCase().includes(q) ||
        info.desc.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [query, t]);

  const heroSpeech = `${t.hero.title}. ${t.hero.text}`;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-4 pt-6 sm:pt-10">
      {/* Hero */}
      <section className="grid items-center gap-8 rounded-4xl border-2 border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-secondary px-4 py-1.5 text-base font-bold text-secondary-foreground">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{t.hero.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/topics"
              className="inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
            >
              {t.hero.ctaTopics}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-primary/30 bg-accent px-6 text-lg font-bold text-accent-foreground shadow-soft transition-colors hover:bg-accent/70"
            >
              <HelpCircle className="size-5" aria-hidden="true" />
              {t.hero.ctaQuiz}
            </Link>
          </div>
          <div className="mt-4">
            <SpeakButton text={heroSpeech} />
          </div>
        </div>
        <img
          src={heroFamily}
          alt="A smiling village family of grandparents, parents and two children sitting together outside their home"
          width={1280}
          height={960}
          className="w-full rounded-4xl border-2 border-border object-cover"
        />
      </section>

      {/* Search */}
      <section className="mt-10">
        <label htmlFor="topic-search" className="text-xl font-extrabold text-foreground">
          {t.searchLabel}
        </label>
        <div className="mt-3 flex items-center gap-3 rounded-full border-2 border-border bg-card px-5 py-3 shadow-soft focus-within:border-primary">
          <Search className="size-6 shrink-0 text-primary" aria-hidden="true" />
          <input
            id="topic-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="min-h-11 w-full bg-transparent text-lg text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mt-10">
        <h2 className="text-3xl font-extrabold text-foreground">{t.topicsTitle}</h2>
        <p className="mt-1 text-lg text-muted-foreground">{t.topicsText}</p>

        {results.length === 0 ? (
          <p className="mt-6 rounded-3xl border-2 border-border bg-card p-6 text-lg font-semibold text-muted-foreground">
            {t.noResults}
          </p>
        ) : (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ id, img }) => {
              const info = t.categories[id];
              return (
                <li key={id}>
                  <Link
                    to="/topics"
                    className="flex h-full flex-col items-center gap-3 rounded-4xl border-2 border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="flex size-28 items-center justify-center rounded-full bg-secondary/70">
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        width={512}
                        height={512}
                        className="size-24 object-contain"
                      />
                    </span>
                    <span className="text-2xl font-extrabold leading-snug text-foreground">
                      {info.title}
                    </span>
                    <span className="text-lg leading-relaxed text-muted-foreground">{info.desc}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Daily tip */}
      <div className="mt-12">
        <DailyTip />
      </div>
    </main>
  );
}
