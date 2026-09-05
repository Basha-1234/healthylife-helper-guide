import { useEffect, useState } from "react";
import { Lightbulb, RefreshCw } from "lucide-react";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang } from "@/lib/i18n";

export function DailyTip() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);

  // Start on a tip that matches today's date, then rotate on its own.
  useEffect(() => {
    setIndex(new Date().getDate() % t.tips.length);
  }, [t.tips.length]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % t.tips.length), 8000);
    return () => clearInterval(id);
  }, [t.tips.length]);

  const tip = t.tips[index] ?? t.tips[0] ?? "";

  return (
    <section className="rounded-4xl border-2 border-accent/50 bg-accent/40 p-6 shadow-soft sm:p-8">
      <h2 className="flex items-center gap-2 text-xl font-extrabold text-foreground">
        <Lightbulb className="size-7 text-accent-foreground" aria-hidden="true" />
        {t.tipTitle}
      </h2>
      <p key={index} className="mt-3 animate-in fade-in text-2xl font-bold leading-snug text-foreground">
        {tip}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % t.tips.length)}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-5 py-2 text-base font-bold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
        >
          <RefreshCw className="size-5" aria-hidden="true" />
          {t.nextTip}
        </button>
        <SpeakButton text={tip} />
      </div>
    </section>
  );
}
