import CrownIcon from "./CrownIcon";

export default function Footer() {
  return (
    <footer className="bg-dk-purple-950 border-t border-dk-gold/20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CrownIcon className="w-6 h-4 text-dk-gold" />
          <span className="font-serif font-bold text-dk-cream">대경대학교</span>
          <span className="text-dk-cream-dim text-sm">
            교직원 팩트챗(FactChat) 실습 교육
          </span>
        </div>
        <p className="text-xs text-dk-cream-dim/70">
          © 2026 Daekyeung University. 본 페이지는 교직원 대상 내부 실습 교육 자료입니다.
        </p>
      </div>
    </footer>
  );
}
