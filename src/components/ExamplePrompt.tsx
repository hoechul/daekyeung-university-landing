"use client";

import { useState } from "react";

const cardBorder = { borderColor: "rgba(91,44,143,0.15)" };

export default function ExamplePrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // 클립보드 접근이 막힌 환경(구형 브라우저 등)에서는 조용히 무시
    }
  };

  return (
    <div
      className="relative rounded-xl pl-4 pr-3 py-3 text-sm text-dk-purple-900 bg-dk-purple-900/[0.04] border"
      style={cardBorder}
    >
      <button
        onClick={copy}
        className="absolute top-2 right-2 shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold text-dk-purple-700 bg-dk-purple-900/[0.06] hover:bg-dk-purple-900/[0.12] transition-colors"
      >
        {copied ? "복사됨 ✓" : "📋 복사"}
      </button>
      <p className="pr-16 leading-relaxed">&ldquo;{text}&rdquo;</p>
    </div>
  );
}
