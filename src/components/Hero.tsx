import CrownIcon from "./CrownIcon";

const badges = ["60분 실습형", "6개 세션 × 10분", "스마트폰·PC 동시 진행", "전 교직원 대상"];

export default function Hero() {
  return (
    <section id="top" className="dk-stage-bg relative overflow-hidden">
      <CrownIcon className="pointer-events-none absolute -right-10 -top-10 w-72 h-56 text-dk-gold-light opacity-[0.07] rotate-6" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="font-display italic tracking-[0.35em] text-xs sm:text-sm uppercase text-dk-gold-light">
          2026 Daekyeung University · Staff AI Training
        </p>

        <h1 className="mt-5 font-serif font-black text-4xl sm:text-6xl leading-[1.15] text-dk-cream max-w-4xl">
          막이 오릅니다 —{" "}
          <span className="text-dk-gold-light">팩트챗(FactChat)</span>과 함께하는
          <br className="hidden sm:block" /> 대경대학교 업무의 무대
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-dk-cream-dim leading-relaxed">
          공연·예술 특화대학 대경대학교 교직원을 위한 실습형 AI 활용 교육.
          포스터 한 장, 홍보 영상 한 편이 완성되는 60분 — 이론이 아닌
          <span className="text-dk-gold-light font-semibold"> 결과물 중심</span>의
          팩트챗 실습입니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-dk-gold/40 bg-white/5 px-4 py-1.5 text-sm text-dk-gold-light"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#curriculum"
            className="rounded-full bg-dk-gold px-7 py-3.5 font-bold text-dk-purple-950 hover:bg-dk-gold-light transition-colors"
          >
            60분 커리큘럼 보기
          </a>
          <a
            href="#image"
            className="rounded-full border border-dk-gold/50 px-7 py-3.5 font-bold text-dk-cream hover:bg-white/10 transition-colors"
          >
            🖼️🎬 이미지·영상 실습 사례 보기
          </a>
        </div>
      </div>
    </section>
  );
}
