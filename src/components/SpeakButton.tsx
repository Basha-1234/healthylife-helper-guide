import { useEffect, useState } from "react";
import { Volume2, Square } from "lucide-react";
import { useLang } from "@/lib/i18n";

/** Reads the given text aloud using the browser's speech synthesis. */
export function SpeakButton({
  text,
  className = "",
  label,
}: {
  text: string;
  className?: string;
  label?: string;
}) {
  const { t, speechLocale } = useLang();
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!supported) return null;

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const speak = () => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = speechLocale;
    utter.rate = 0.9;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      type="button"
      onClick={speaking ? stop : speak}
      className={`inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-4 py-2 text-base font-semibold text-primary shadow-soft transition-colors hover:bg-primary/10 ${className}`}
    >
      {speaking ? (
        <Square className="size-5" aria-hidden="true" />
      ) : (
        <Volume2 className="size-5" aria-hidden="true" />
      )}
      {speaking ? t.stopReading : label ?? t.readAloud}
    </button>
  );
}
