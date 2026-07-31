"use client";

import { useState } from "react";

function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // 클립보드 접근이 막힌 환경(구형 브라우저 등)에서는 조용히 무시
    }
  };
  return { copied, copy };
}

export default function PromptCard({
  icon,
  dept,
  title,
  prompt,
  accent = "gold",
  reference,
}: {
  icon: string;
  dept: string;
  title: string;
  prompt: string;
  accent?: "gold" | "rose";
  reference?: {
    image: string;
    imageAlt: string;
    caption: string;
    credit: string;
    sourceUrl: string;
    license: string;
    width: number;
    height: number;
  };
}) {
  const main = useCopy();

  const accentText = accent === "gold" ? "text-dk-gold-light" : "text-dk-rose-light";
  const accentBorder = accent === "gold" ? "border-dk-gold/30" : "border-dk-rose/30";
  const accentButton =
    accent === "gold"
      ? "bg-dk-gold text-dk-purple-950 hover:bg-dk-gold-light"
      : "bg-dk-rose text-dk-purple-950 hover:bg-dk-rose-light";
  const accentOutlineButton =
    accent === "gold"
      ? "border-dk-gold/60 text-dk-gold-light hover:bg-dk-gold/10"
      : "border-dk-rose/60 text-dk-rose-light hover:bg-dk-rose/10";

  return (
    <div className={`dk-card rounded-2xl p-6 flex flex-col gap-4 ${accentBorder}`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className={`text-xs uppercase tracking-widest ${accentText}`}>{dept}</p>
          <h3 className="font-serif font-bold text-lg text-dk-cream">{title}</h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-dk-cream-dim rounded-lg bg-black/20 p-4 font-mono">
        {prompt}
      </p>
      <button
        onClick={() => main.copy(prompt)}
        className={`self-start rounded-full px-4 py-2 text-sm font-bold transition-colors ${accentButton}`}
      >
        {main.copied ? "복사 완료 ✓" : "📋 프롬프트 복사하기"}
      </button>

      {reference && (
        <div className={`mt-1 pt-4 border-t border-dashed ${accentBorder} flex flex-col gap-3`}>
          <p className={`text-xs uppercase tracking-widest font-bold ${accentText}`}>
            📸 참고 이미지 · 대한민국 실사 사례
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={reference.image}
              alt={reference.imageAlt}
              width={reference.width}
              height={reference.height}
              className="w-full sm:w-40 h-auto rounded-lg border border-white/15 shrink-0 self-start"
            />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-dk-cream-dim">{reference.caption}</p>
              <p className="text-xs text-dk-cream-dim/70">
                출처: {reference.credit} · {reference.license}
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                <a
                  href={reference.image}
                  download
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${accentButton}`}
                >
                  ⬇️ 이미지 다운로드
                </a>
                <a
                  href={reference.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${accentOutlineButton}`}
                >
                  원본·출처 보기 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
