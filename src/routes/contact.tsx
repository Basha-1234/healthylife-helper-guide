import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Helplines — Health Awareness" },
      {
        name: "description",
        content: "Free health helpline numbers and how to reach our community service volunteers.",
      },
      { property: "og:title", content: "Contact & Helplines — Health Awareness" },
      {
        property: "og:description",
        content: "Helpline numbers and contact details for our health awareness project.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return <ComingSoon heading={t.nav.contact} />;
}
