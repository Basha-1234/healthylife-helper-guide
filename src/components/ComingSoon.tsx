import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function ComingSoon({ heading }: { heading: string }) {
  const { t } = useLang();
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-foreground">{heading}</h1>
      <p className="mt-3 text-xl font-semibold text-primary">{t.comingSoon}</p>
      <p className="mt-2 text-lg text-muted-foreground">{t.comingSoonText}</p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-14 items-center rounded-full bg-primary px-6 text-lg font-bold text-primary-foreground shadow-soft hover:bg-primary/90"
      >
        {t.nav.home}
      </Link>
    </main>
  );
}
