import SectionEyebrow from "./SectionEyebrow";
import ExamplePrompt from "./ExamplePrompt";

const findSteps = [
  "채팅 화면의 모델 선택 드롭다운(또는 챗봇 상세 정보)을 엽니다.",
  "각 모델의 '비용' 항목을 봅니다. '10,000 입력 토큰당 ○크레딧' 대신 '무료'로 표시된 모델이 무제한 모델입니다.",
  "'무료'로 표시된 모델 2개를 기본 모델로 지정해두고 반복 업무에 사용합니다.",
];

const freeModels = [
  {
    label: "무료 모델 ①",
    title: "가벼운 범용 대화형",
    useCase:
      "짧은 질문, 맞춤법·표현 다듬기, 간단 요약, 아이디어 브레인스토밍, 형식 변환(표·불릿)",
    examples: [
      "이 문장을 더 자연스럽게 3가지 버전으로 바꿔줘",
      "회의 메모를 불릿 5개로 요약해줘",
      "이 내용을 표로 정리해줘",
    ],
    note: "하루에도 수십 번 쓰는 자잘한 작업은 전부 여기서 처리하세요. 크레딧 0원입니다.",
  },
  {
    label: "무료 모델 ②",
    title: "정리·초안형",
    useCase: "개념 설명, 자료 구조화, 목차·초안 뼈대 잡기, 긴 글 1차 요약",
    examples: [
      "'지역 소멸' 배경지식을 5줄로 정리해줘",
      "보도자료 초안 뼈대(제목·리드·본문 소제목)를 잡아줘",
      "이 기사를 3문단으로 1차 요약해줘",
    ],
    note: "'1차 정리'는 무료 모델로, '정밀 검수'만 크레딧 모델로 넘기면 토큰이 확 줄어듭니다.",
  },
];

const strategySteps = [
  {
    step: "STEP 1",
    title: "초안·반복작업은 무료 모델",
    desc: "요약·초안·형식 변환·연습은 무제한 모델로. 여기서 아무리 돌려도 크레딧이 소모되지 않습니다.",
  },
  {
    step: "STEP 2",
    title: "정밀 검수만 크레딧 모델",
    desc: "최종 표현 다듬기, 민감한 판단, 정밀 팩트체크처럼 '품질이 중요한 마지막 단계'에서만 고성능(크레딧) 모델을 씁니다.",
  },
  {
    step: "STEP 3",
    title: "무료 결과를 붙여 '검수만' 요청",
    desc: '무료 모델이 만든 결과물을 크레딧 모델에 붙여넣고 "이 초안을 검수·보완만 해줘"라고 하면, 처음부터 다시 만드는 것보다 토큰이 훨씬 적게 듭니다.',
  },
];

const cardBorder = { borderColor: "rgba(91,44,143,0.15)" };

export default function FreeModelGuide() {
  return (
    <section id="free-model" className="bg-dk-cream">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Credit Saving"
          title="토큰 0원! 무료 모델 200% 활용법"
          description="팩트챗에는 크레딧을 소모하지 않는 무료(무제한) 모델이 제공됩니다. 이 무료 모델 2개만 잘 써도 대부분의 반복 업무는 크레딧 0원으로 처리할 수 있습니다."
        />

        <div className="mt-12 rounded-2xl border bg-white/70 p-7" style={cardBorder}>
          <h3 className="font-serif font-bold text-lg text-dk-purple-900">
            먼저 · 무료 모델 찾는 법
          </h3>
          <ol className="mt-4 flex flex-col gap-3">
            {findSteps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm text-dk-purple-800/80 leading-relaxed">
                <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-dk-purple-600 text-dk-cream text-xs font-bold">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {freeModels.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border bg-white/70 p-7 flex flex-col gap-3"
              style={cardBorder}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-dk-purple-500" />
                <p className="text-xs font-bold tracking-widest text-dk-purple-500 uppercase">
                  {m.label}
                </p>
              </div>
              <h4 className="font-serif font-bold text-xl text-dk-purple-900">{m.title}</h4>

              <div>
                <p className="text-xs font-bold tracking-wide text-dk-gold uppercase">
                  이런 일에 쓰세요
                </p>
                <p className="mt-1.5 text-sm text-dk-purple-800/75 leading-relaxed">
                  {m.useCase}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold tracking-wide text-dk-gold uppercase">
                  실무 예시
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {m.examples.map((ex) => (
                    <ExamplePrompt key={ex} text={ex} />
                  ))}
                </div>
              </div>

              <p className="mt-1 text-xs text-dk-purple-800/60 leading-relaxed">💡 {m.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-sm font-bold text-dk-purple-900 flex items-center gap-2">
            <span>💰</span> 크레딧 절약 3단계 전략
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            {strategySteps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border bg-white/70 p-6"
                style={cardBorder}
              >
                <p className="text-xs font-bold tracking-widest text-dk-purple-500">{s.step}</p>
                <h4 className="mt-2 font-serif font-bold text-dk-purple-900">{s.title}</h4>
                <p className="mt-2 text-sm text-dk-purple-800/75 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-dk-rose/40 bg-dk-rose/[0.06] p-5">
          <p className="text-sm text-dk-purple-900 leading-relaxed">
            <span className="font-bold text-dk-rose">⚠️ 주의 ·</span> 무료 모델은 최신 정보·정밀도가
            고성능 모델보다 낮을 수 있습니다. 방송·공식 문서에 나가는 사실·수치는 반드시 고성능
            모델 + 사람의 최종 확인(팩트체크)을 거치세요.
          </p>
        </div>
      </div>
    </section>
  );
}
