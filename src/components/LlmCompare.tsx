import SectionEyebrow from "./SectionEyebrow";

const models = [
  {
    icon: "🧠",
    name: "GPT",
    type: "범용 만능형",
    desc: "다목적 초안 작성에 강함",
    example: "학과 축제 · 정기공연 기획안 초안 작성",
  },
  {
    icon: "📚",
    name: "Claude",
    type: "장문·분석형",
    desc: "긴 문서 정리와 교정에 강함",
    example: "졸업공연 팜플렛 원고 정리 · 교정, 학사자료 요약",
  },
  {
    icon: "🔎",
    name: "Gemini",
    type: "검색·멀티모달형",
    desc: "최신 정보 검색과 이미지 인식에 강함",
    example: "최신 공연 트렌드 리서치 + 무대 사진 인식",
  },
];

export default function LlmCompare() {
  return (
    <section id="llm" className="dk-stage-bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Model Guide"
          title="주요 LLM 비교"
          description="팩트챗 안에서 상황에 맞는 모델을 골라 쓰는 것이 핵심입니다. 공연예술 업무 예시로 감을 잡아보세요."
          tone="onDark"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.name} className="dk-card rounded-2xl p-7 flex flex-col gap-3">
              <span className="text-3xl">{m.icon}</span>
              <h3 className="font-serif font-bold text-2xl text-dk-cream">{m.name}</h3>
              <p className="text-dk-gold-light text-sm font-bold tracking-wide">{m.type}</p>
              <p className="text-dk-cream-dim text-sm">{m.desc}</p>
              <div className="mt-2 rounded-lg bg-black/20 p-4 text-sm text-dk-cream-dim">
                <span className="text-dk-gold-light font-bold">예시 · </span>
                {m.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
