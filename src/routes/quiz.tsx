import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Test Your Knowledge — Health Awareness" },
      {
        name: "description",
        content: "Very easy multiple-choice questions to check what you know about staying healthy.",
      },
      { property: "og:title", content: "Test Your Knowledge — Health Awareness" },
      {
        property: "og:description",
        content: "Short, easy health quizzes for families and community volunteers.",
      },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { t } = useLang();
  return <ComingSoon heading={t.nav.quiz} />;
}
