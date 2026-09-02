import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Printable Posters & Resources — Health Awareness" },
      {
        name: "description",
        content:
          "Printable health posters and trusted links that volunteers can share in villages and schools.",
      },
      { property: "og:title", content: "Printable Posters & Resources — Health Awareness" },
      {
        property: "og:description",
        content: "Free posters and trusted health links for community volunteers.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const { t } = useLang();
  return <ComingSoon heading={t.nav.resources} />;
}
