import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, X, Printer, CircleDot, HelpCircle } from "lucide-react";
import { SpeakButton } from "@/components/SpeakButton";
import { QuizBlock } from "@/components/QuizBlock";
import { useLang, type CategoryId } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";
import { CATEGORY_IDS, CONTENT } from "@/lib/content";
import { CATEGORY_IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/topics/$topicId")({
  loader: ({ params }) => {
    if (!CATEGORY_IDS.includes(params.topicId as CategoryId)) throw notFound();
    return { topicId: params.topicId as CategoryId };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Health Awareness" }, { name: "robots", content: "noindex" }] };
    }
    const info = CONTENT.en[loaderData.topicId];
    const title = `${info.title} — Health Awareness`;
    return {
      meta: [
        { title },
        { name: "description", content: `${info.desc} Simple tips, do's and don'ts, myths and facts, and a short quiz.` },
        { property: "og:title", content: title },
        { property: "og:description", content: info.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TopicPage,
});

function TopicPage() {
  const { topicId } = Route.useLoaderData();
  const { lang } = useLang();
  const ui = useUi(lang);
  const c = CONTENT[lang][topicId];

  const speech = [c.title, c.story, ui.tipsTitle, ...c.tips].join(". ");

  return (
    <main className="mx-auto max-w-4xl px-4 pb-8 pt-6">
      <Link
        to="/topics"
        className="no-print inline-flex min-h-12 items-center gap-2 text-lg font-bold text-primary hover:underline"
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
        {ui.backToTopics}
      </Link>

      {/* Header */}
      <header className="mt-4 flex flex-col items-center gap-4 rounded-4xl border-2 border-border bg-card p-6 text-center shadow-soft sm:flex-row sm:text-left">
        <span className="flex size-32 shrink-0 items-center justify-center rounded-full bg-secondary/70">
          <img src={CATEGORY_IMAGES[topicId]} alt="" width={512} height={512} className="size-28 object-contain" />
        </span>
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">{c.title}</h1>
          <p className="mt-2 text-xl leading-relaxed text-muted-foreground">{c.desc}</p>
          <div className="no-print mt-4 flex flex-wrap gap-3">
            <SpeakButton text={speech} />
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-primary/30 bg-accent px-5 text-lg font-bold text-accent-foreground shadow-soft transition-colors hover:bg-accent/70"
            >
              <Printer className="size-5" aria-hidden="true" />
              {ui.printPoster}
            </button>
          </div>
        </div>
      </header>

      {/* Story */}
      <section className="mt-8 rounded-4xl border-2 border-border bg-secondary/40 p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.whyMatters}</h2>
        <p className="mt-3 text-xl leading-relaxed text-foreground">{c.story}</p>
      </section>

      {/* Tips */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.tipsTitle}</h2>
        <ul className="mt-4 grid gap-4">
          {c.tips.map((tip) => (
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

      {/* Do's and Don'ts */}
      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-4xl border-2 border-primary/40 bg-secondary/40 p-6 shadow-soft">
          <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
            <Check className="size-7 text-primary" aria-hidden="true" />
            {ui.dosTitle}
          </h2>
          <ul className="mt-4 grid gap-3">
            {c.dos.map((d) => (
              <li key={d} className="flex items-start gap-3 text-xl leading-relaxed text-foreground">
                <Check className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-4xl border-2 border-destructive/40 bg-destructive/10 p-6 shadow-soft">
          <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
            <X className="size-7 text-destructive" aria-hidden="true" />
            {ui.dontsTitle}
          </h2>
          <ul className="mt-4 grid gap-3">
            {c.donts.map((d) => (
              <li key={d} className="flex items-start gap-3 text-xl leading-relaxed text-foreground">
                <X className="mt-1 size-6 shrink-0 text-destructive" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Myths vs facts */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-foreground">{ui.mythTitle}</h2>
        <ul className="mt-4 grid gap-4">
          {c.myths.map((m) => (
            <li key={m.myth} className="grid gap-3 rounded-4xl border-2 border-border bg-card p-5 shadow-soft sm:grid-cols-2">
              <div className="rounded-3xl bg-destructive/10 p-4">
                <p className="text-base font-extrabold uppercase text-destructive">{ui.myth}</p>
                <p className="mt-1 text-xl leading-relaxed text-foreground">{m.myth}</p>
              </div>
              <div className="rounded-3xl bg-secondary/60 p-4">
                <p className="text-base font-extrabold uppercase text-primary">{ui.fact}</p>
                <p className="mt-1 text-xl leading-relaxed text-foreground">{m.fact}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Quiz */}
      <section className="no-print mt-10">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <HelpCircle className="size-7 text-primary" aria-hidden="true" />
          {ui.takeQuiz}
        </h2>
        <div className="mt-4">
          <QuizBlock key={`${lang}-${topicId}`} questions={c.quiz} />
        </div>
      </section>

      <p className="no-print mt-8 text-lg text-muted-foreground">{ui.posterNote}</p>
    </main>
  );
}
