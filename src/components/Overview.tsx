import SectionEyebrow from "./SectionEyebrow";

const facts = [
  {
    icon: "🎭",
    label: "교육 대상",
    value: "대경대학교 전 교직원",
    detail: "행정·교무·입학홍보·공연예술계열 실습실 담당 교원 포함",
  },
  {
    icon: "⏱️",
    label: "교육 시간",
    value: "총 60분 · 6개 세션",
    detail: "세션당 10분 실습 진행",
  },
  {
    icon: "📱",
    label: "진행 방식",
    value: "실습형 강의",
    detail: "스마트폰 · PC 동시 진행, 그대로 따라하는 실습",
  },
  {
    icon: "🏆",
    label: "교육 목표",
    value: "결과물 중심 학습",
    detail: "공연 포스터·홍보영상 등 실무 산출물을 직접 완성",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-dk-cream">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Overview"
          title="교육 개요"
          description="공연·예술 특화대학 대경대학교의 정체성에 맞춰, 이론 설명보다 '실습으로 완성하는 결과물'에 집중한 60분 팩트챗 교육입니다."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-dk-purple-200/60 bg-white/70 p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ borderColor: "rgba(91,44,143,0.15)" }}
            >
              <span className="text-3xl">{f.icon}</span>
              <p className="mt-4 text-xs uppercase tracking-widest text-dk-purple-500 font-bold">
                {f.label}
              </p>
              <p className="mt-1 font-serif font-bold text-xl text-dk-purple-900">
                {f.value}
              </p>
              <p className="mt-2 text-sm text-dk-purple-800/70 leading-relaxed">
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
