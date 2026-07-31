import SectionEyebrow from "./SectionEyebrow";

const tips = [
  {
    icon: "🎯",
    title: "학과·행사명은 구체적으로",
    desc: "'포스터 만들어줘' 대신 학과명, 공연명, 대상(신입생/수험생)까지 넣으면 결과물의 완성도가 크게 올라갑니다.",
  },
  {
    icon: "🟣",
    title: "브랜드 컬러 키워드 고정",
    desc: "'대경대 보라(Purple)와 골드 톤'이라는 키워드를 프롬프트에 넣으면 학교 아이덴티티가 유지된 결과물을 얻을 수 있습니다.",
  },
  {
    icon: "💡",
    title: "무대 연출 용어 활용",
    desc: "스포트라이트, 슬로우모션, 클로즈업, 커튼콜 같은 공연·영상 전문 용어를 넣을수록 이미지·영상 완성도가 높아집니다.",
  },
  {
    icon: "⚠️",
    title: "저작권·초상권 확인 필수",
    desc: "생성된 이미지·영상을 실제 홍보물로 배포하기 전, 반드시 소속 부서 검수와 초상권·저작권 확인을 거쳐주세요.",
  },
];

export default function Tips() {
  return (
    <section id="tips" className="bg-dk-cream">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Tips"
          title="현장에서 바로 쓰는 활용 팁"
          description="실습 중 자주 나오는 질문을 바탕으로 정리했습니다."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tips.map((t) => (
            <div
              key={t.title}
              className="flex gap-4 rounded-2xl border bg-white/70 p-6"
              style={{ borderColor: "rgba(91,44,143,0.15)" }}
            >
              <span className="text-2xl">{t.icon}</span>
              <div>
                <h3 className="font-serif font-bold text-lg text-dk-purple-900">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm text-dk-purple-800/75 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
