import { useMemo, useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useUi } from "@/lib/ui-strings";
import type { QuizQuestion } from "@/lib/content";

export function QuizBlock({ questions }: { questions: QuizQuestion[] }) {
  const { lang } = useLang();
  const ui = useUi(lang);
  const list = useMemo(() => questions, [questions]);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = list[index];

  function reset() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  function choose(i: number) {
    if (picked !== null || !current) return;
    setPicked(i);
    if (i === current.answer) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= list.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  if (!current) return null;

  if (done) {
    const good = score >= Math.ceil(list.length / 2);
    return (
      <div className="rounded-4xl border-2 border-border bg-card p-6 text-center shadow-soft sm:p-8">
        <p className="text-xl font-bold text-muted-foreground">{ui.yourScore}</p>
        <p className="mt-2 text-5xl font-extrabold text-primary">
          {score} / {list.length}
        </p>
        <p className="mt-4 text-xl leading-relaxed text-foreground">
          {good ? ui.goodJob : ui.keepLearning}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
        >
          <RotateCcw className="size-5" aria-hidden="true" />
          {ui.tryAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-4xl border-2 border-border bg-card p-6 shadow-soft sm:p-8">
      <p className="text-lg font-bold text-muted-foreground">
        {ui.question} {index + 1} {ui.of} {list.length}
      </p>
      <h3 className="mt-2 text-2xl font-extrabold leading-snug text-foreground">{current.q}</h3>

      <ul className="mt-5 grid gap-3">
        {current.options.map((opt, i) => {
          const isAnswer = i === current.answer;
          const isPicked = picked === i;
          const revealed = picked !== null;
          const state = revealed
            ? isAnswer
              ? "border-primary bg-secondary/70"
              : isPicked
                ? "border-destructive bg-destructive/10"
                : "border-border bg-card opacity-70"
            : "border-border bg-card hover:border-primary hover:bg-secondary/40";
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => choose(i)}
                disabled={revealed}
                className={`flex w-full min-h-14 items-center justify-between gap-3 rounded-3xl border-2 px-5 py-3 text-left text-lg font-semibold text-foreground transition-colors ${state}`}
              >
                <span>{opt}</span>
                {revealed && isAnswer ? <Check className="size-6 shrink-0 text-primary" aria-hidden="true" /> : null}
                {revealed && isPicked && !isAnswer ? (
                  <X className="size-6 shrink-0 text-destructive" aria-hidden="true" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {picked !== null ? (
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <p className="text-lg font-bold text-foreground">
            {picked === current.answer ? ui.correct : ui.wrong}
          </p>
          <button
            type="button"
            onClick={next}
            className="inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
          >
            {index + 1 >= list.length ? ui.seeResult : ui.nextQuestion}
          </button>
        </div>
      ) : null}
    </div>
  );
}
