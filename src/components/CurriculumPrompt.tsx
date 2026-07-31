"use client";

import { useState } from "react";

export default function CurriculumPrompt({
  prompt,
  highlighted = false,
}: {
  prompt: string;
  highlighted?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={`mt-5 rounded-xl border p-4 ${
        highlighted
          ? "border-white/15 bg-black/20"
          : "border-dk-purple-200/70 bg-dk-purple-950/[0.035]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p
          className={`text-xs font-bold tracking-[0.16em] ${
            highlighted ? "text-dk-gold-light" : "text-dk-purple-600"
          }`}
        >
          바로 쓰는 프롬프트
        </p>
        <button
          type="button"
          onClick={copyPrompt}
          aria-live="polite"
          className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${
            highlighted
              ? "bg-dk-gold text-dk-purple-950 hover:bg-dk-gold-light focus-visible:outline-dk-gold"
              : "bg-dk-purple-700 text-white hover:bg-dk-purple-600 focus-visible:outline-dk-purple-600"
          }`}
        >
          {copied ? "복사 완료 ✓" : "프롬프트 복사하기"}
        </button>
      </div>
      <p
        className={`mt-3 whitespace-pre-line font-mono text-[13px] leading-6 ${
          highlighted ? "text-dk-cream-dim" : "text-dk-purple-900/80"
        }`}
      >
        {prompt}
      </p>
    </div>
  );
}
