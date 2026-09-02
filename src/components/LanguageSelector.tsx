import { Globe } from "lucide-react";
import { LANGUAGES, useLang, type LangCode } from "@/lib/i18n";

export function LanguageSelector() {
  const { lang, setLang, t } = useLang();

  return (
    <label className="flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-2 shadow-soft">
      <Globe className="size-5 text-primary" aria-hidden="true" />
      <span className="sr-only">{t.languageLabel}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        aria-label={t.languageLabel}
        className="min-h-[28px] bg-transparent text-base font-semibold text-foreground outline-none"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.native}
          </option>
        ))}
      </select>
    </label>
  );
}
