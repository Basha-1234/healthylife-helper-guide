import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/topics")({
  head: () => ({
    meta: [
      { title: "Health Topics — Health Awareness" },
      {
        name: "description",
        content:
          "Browse simple health topics: hygiene, mosquito safety, nutrition, mind care, disease facts and family health.",
      },
      { property: "og:title", content: "Health Topics — Health Awareness" },
      {
        property: "og:description",
        content: "Picture-first health topics explained in easy words for every family.",
      },
    ],
  }),
  component: TopicsPage,
});

function TopicsPage() {
  const { t } = useLang();
  return <ComingSoon heading={t.nav.topics} />;
}
