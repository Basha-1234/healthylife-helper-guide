import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";
import { CATEGORY_IDS, CONTENT } from "@/lib/content";
import { CATEGORY_IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/topics/")({
  head: () => ({
    meta: [
      { title: "All Health Topics — Health Awareness" },
      {
        name: "description",
        content:
          "Six simple health topics with pictures: personal hygiene, mosquito safety, good food, mind care, disease facts and women & family health.",
      },
      { property: "og:title", content: "All Health Topics — Health Awareness" },
      {
        property: "og:description",
        content: "Pick a topic and learn in easy words, with pictures and read-aloud, in English, Hindi or Telugu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TopicsPage,
});

function TopicsPage() {
  const { lang } = useLang();
  const ui = useUi(lang);
  const content = CONTENT[lang];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-6 pt-8">
      <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">{ui.topicsHeading}</h1>
      <p className="mt-2 max-w-3xl text-lg leading-relaxed text-muted-foreground">{ui.topicsIntro}</p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_IDS.map((id) => {
          const info = content[id];
          return (
            <li key={id}>
              <Link
                to="/topics/$topicId"
                params={{ topicId: id }}
                className="flex h-full flex-col items-center gap-3 rounded-4xl border-2 border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex size-28 items-center justify-center rounded-full bg-secondary/70">
                  <img
                    src={CATEGORY_IMAGES[id]}
                    alt=""
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-24 object-contain"
                  />
                </span>
                <span className="text-2xl font-extrabold leading-snug text-foreground">{info.title}</span>
                <span className="text-lg leading-relaxed text-muted-foreground">{info.desc}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 text-lg font-bold text-primary">
                  {ui.openTopic}
                  <ArrowRight className="size-5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
