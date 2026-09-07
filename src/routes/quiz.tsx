import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle } from "lucide-react";
import { QuizBlock } from "@/components/QuizBlock";
import { useLang, type CategoryId } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";
import { CATEGORY_IDS, CONTENT } from "@/lib/content";
import { CATEGORY_IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Health Quiz — Health Awareness" },
      {
        name: "description",
        content:
          "A short, easy health quiz on hygiene, mosquito safety, food, mind care, disease facts and family health. No marks, just learning.",
      },
      { property: "og:title", content: "Health Quiz — Health Awareness" },
      { property: "og:description", content: "Test what you know with a few simple picture-friendly questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizPage,
});

type Selection = CategoryId | "all";

function QuizPage() {
  const { lang } = useLang();
  const ui = useUi(lang);
  const content = CONTENT[lang];
  const [selected, setSelected] = useState<Selection>("all");

  const questions =
    selected === "all" ? CATEGORY_IDS.flatMap((id) => content[id].quiz) : content[selected].quiz;

  return (
    <main className="mx-auto max-w-4xl px-4 pb-8 pt-8">
      <h1 className="flex items-center gap-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        <HelpCircle className="size-9 text-primary" aria-hidden="true" />
        {ui.quizHeading}
      </h1>
      <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{ui.quizIntro}</p>

      <h2 className="mt-8 text-2xl font-extrabold text-foreground">{ui.quizTopicQuestion}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSelected("all")}
          className={`min-h-14 rounded-full border-2 px-5 text-lg font-bold shadow-soft transition-colors ${
            selected === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-secondary/50"
          }`}
        >
          {ui.allTopics}
        </button>
        {CATEGORY_IDS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelected(id)}
            className={`inline-flex min-h-14 items-center gap-2 rounded-full border-2 px-5 text-lg font-bold shadow-soft transition-colors ${
              selected === id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:bg-secondary/50"
            }`}
          >
            <img src={CATEGORY_IMAGES[id]} alt="" width={512} height={512} className="size-8 object-contain" />
            {content[id].title}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <QuizBlock key={`${lang}-${selected}`} questions={questions} />
      </div>
    </main>
  );
}
