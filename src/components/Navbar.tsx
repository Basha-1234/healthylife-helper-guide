import { Link } from "@tanstack/react-router";
import { Home, LayoutGrid, HelpCircle, BookOpen, Phone, HeartPulse } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const { t } = useLang();

  const items = [
    { to: "/", label: t.nav.home, Icon: Home, exact: true },
    { to: "/topics", label: t.nav.topics, Icon: LayoutGrid },
    { to: "/quiz", label: t.nav.quiz, Icon: HelpCircle },
    { to: "/resources", label: t.nav.resources, Icon: BookOpen },
    { to: "/contact", label: t.nav.contact, Icon: Phone },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b-4 border-primary/15 bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15">
            <HeartPulse className="size-6 text-primary" aria-hidden="true" />
          </span>
          <span className="text-lg font-extrabold leading-tight text-foreground sm:text-xl">
            {t.siteName}
          </span>
        </Link>
        <LanguageSelector />
      </div>
      <nav aria-label={t.nav.topics} className="border-t-2 border-border/70 bg-secondary/40">
        <ul className="mx-auto flex max-w-6xl items-stretch gap-1 overflow-x-auto px-2 py-2">
          {items.map(({ to, label, Icon, exact }) => (
            <li key={to} className="flex-1">
              <Link
                to={to}
                activeOptions={{ exact: Boolean(exact) }}
                activeProps={{ className: "bg-primary/15 text-primary" }}
                inactiveProps={{ className: "text-foreground" }}
                className="flex min-h-14 min-w-20 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-1.5 text-sm font-bold transition-colors hover:bg-primary/10"
              >
                <Icon className="size-6" aria-hidden="true" />
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
