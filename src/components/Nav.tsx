import CrownIcon from "./CrownIcon";

const links = [
  { href: "#overview", label: "팩트챗실습" },
  { href: "/chatbot-studio.html", label: "챗봇(워크플로우)" },
  { href: "#llm", label: "LLM비교" },
  { href: "#free-model", label: "무료모델" },
  { href: "#curriculum", label: "커리큘럼" },
  { href: "#image", label: "이미지생성" },
  { href: "#video", label: "영상생성" },
  { href: "#tips", label: "활용팁" },
  { href: "#resources", label: "자료실" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-dk-purple-950/85 backdrop-blur border-b border-dk-gold/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <CrownIcon className="w-7 h-5 text-dk-gold" />
          <span className="font-serif font-bold text-dk-cream text-base sm:text-lg leading-tight">
            대경대학교
            <span className="hidden sm:inline text-dk-gold-light font-sans font-normal text-xs align-middle ml-2">
              FactChat 교직원 교육
            </span>
          </span>
        </a>
        <nav className="flex gap-1 overflow-x-auto whitespace-nowrap text-sm text-dk-cream-dim [scrollbar-width:none]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-dk-gold-light transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
