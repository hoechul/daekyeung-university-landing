import SectionEyebrow from "./SectionEyebrow";
import CurriculumPrompt from "./CurriculumPrompt";

const steps = [
  {
    time: "00:00 – 00:10",
    icon: "💬",
    title: "채팅하기",
    desc: "팩트챗과 첫 대화를 나눠봅니다. 학과 행사 안내문을 붙여넣고 더 정중하고 매끄러운 문장으로 다듬어보세요.",
    caseTitle: "학과 행사 공지를 학생용 메시지로 바꾸기",
    ready: "기존 행사 안내문 1개",
    action: "GPT·Claude 중 한 모델 선택 → 초안 입력 → 대상·톤·분량을 지정해 수정",
    result: "문자 공지 + 게시판 공지 2종",
    prompt:
      "당신은 대학 학과 행정 담당자입니다. 아래 행사 안내문을 학생들이 한 번에 이해하도록 다듬어 주세요.\n\n[안내문 붙여넣기]\n\n조건:\n1. 날짜·시간·장소·대상·신청 방법은 빠짐없이 유지\n2. 문자용 200자 이내 버전과 게시판용 버전을 각각 작성\n3. 친절하지만 공적인 말투 사용\n4. 불명확하거나 누락된 정보는 추측하지 말고 ‘확인 필요’로 표시",
    highlight: false,
  },
  {
    time: "00:10 – 00:20",
    icon: "⚖️",
    title: "챗봇 비교",
    desc: "같은 질문 — 예: 신입생 오리엔테이션 환영사 — 을 GPT·Claude·Gemini에 동시에 던져보고 톤과 결과물을 비교합니다.",
    caseTitle: "같은 환영사를 두 모델로 비교·선택하기",
    ready: "학과명·행사명·핵심 메시지 3개",
    action: "입력창 위 ‘+ 비교’ → 비교 모델 선택 → 같은 질문 전송 → 평가표로 답변 선택",
    result: "채택한 1분 환영사 + 선택 근거",
    prompt:
      "대경대학교 신입생 오리엔테이션에서 학과장이 읽을 1분 환영사를 작성해 주세요.\n\n반드시 포함할 내용:\n- 신입생의 새로운 시작을 응원\n- 실습 중심 교육과 협업의 중요성\n- 실패를 두려워하지 말라는 메시지\n\n평가 기준은 진정성, 구체성, 낭독하기 쉬운 문장입니다. 과장된 표현과 상투적인 문구는 줄여 주세요.",
    highlight: false,
  },
  {
    time: "00:20 – 00:30",
    icon: "📁",
    title: "자료 정리",
    desc: "공연 리허설 일정표, 학사 공지 등 자료를 업로드해 요약·정리하고 부서 공유용 문서로 재구성합니다.",
    caseTitle: "여러 파일에서 리허설 운영표 만들기",
    ready: "공연계획서 PDF/HWP + 출연자 명단 XLSX",
    action: "파일 첨부 → 충돌·누락 확인 요청 → 시간순 표와 담당자 체크리스트 생성",
    result: "공유용 리허설 운영표 + 확인사항 목록",
    prompt:
      "첨부한 공연계획서와 출연자 명단을 함께 검토해 리허설 운영표를 만들어 주세요.\n\n출력 형식:\n1. 시간 | 장소 | 순서 | 참여자 | 담당자 | 준비물 표\n2. 사람·장소·시간이 겹치는 항목은 ‘충돌’로 표시\n3. 문서 간 정보가 다르거나 비어 있으면 추측하지 말고 ‘확인 필요’ 목록으로 분리\n4. 마지막에 담당자별 체크리스트 작성\n5. 모든 내용 옆에 근거 파일명과 페이지 또는 시트명을 표시",
    highlight: false,
    sampleFiles: [
      {
        icon: "📄",
        label: "공연계획서 (PDF)",
        href: "/downloads/sample-performance-plan.pdf",
        download: "대경대학교_실용음악과_공연계획서(샘플).pdf",
      },
      {
        icon: "📊",
        label: "출연자 명단 (XLSX)",
        href: "/downloads/sample-cast-list.xlsx",
        download: "대경대학교_실용음악과_출연자명단(샘플).xlsx",
      },
    ],
  },
  {
    time: "00:30 – 00:40",
    icon: "🖼️",
    title: "이미지 생성",
    desc: "정기공연 포스터, 분장 컨셉 아트 등 우리 학과 홍보물 시안을 직접 만들어봅니다.",
    caseTitle: "정기공연 포스터 키비주얼 제작",
    ready: "공연명·일시·장소·분위기 키워드",
    action: "텍스트 없는 세로형 키비주얼 생성 → 마음에 든 시안의 색감·구도 보정",
    result: "포스터 편집용 4:5 이미지",
    prompt:
      "대학 뮤지컬 정기공연 포스터용 세로형 키비주얼. 짙은 보라색 무대 커튼 사이로 따뜻한 금빛 스포트라이트가 비치고, 무대 중앙에 도전과 성장을 상징하는 한 명의 실루엣. 고급스럽고 젊은 분위기, 강한 명암, 상단과 하단에 제목을 넣을 충분한 여백, 4:5 비율. 글자·로고·워터마크는 생성하지 말 것.",
    highlight: true,
  },
  {
    time: "00:40 – 00:50",
    icon: "🎬",
    title: "영상 생성",
    desc: "공연 홍보 티저, 입시설명회 숏폼 릴스 등 짧은 홍보 영상을 프롬프트만으로 제작합니다.",
    caseTitle: "입시설명회 8초 숏폼 티저 만들기",
    ready: "홍보 메시지 1개 + 세로형 포스터 이미지",
    action: "첫 장면·카메라 움직임·마지막 장면을 지정해 이미지 기반 영상 생성",
    result: "무음 편집용 9:16 티저 클립",
    prompt:
      "첨부한 포스터 이미지를 첫 프레임으로 사용한 8초 세로 영상. 닫힌 보라색 무대 커튼이 천천히 열리며 금빛 조명이 중앙을 비춘다. 카메라는 무대 쪽으로 부드럽게 전진하고, 마지막 2초는 중앙 여백을 유지한 채 정지한다. 시네마틱하고 밝은 기대감, 자연스러운 움직임, 9:16. 새 글자·로고·인물 얼굴은 만들지 말 것.",
    highlight: true,
  },
  {
    time: "00:50 – 01:00",
    icon: "🧩",
    title: "챗봇 스튜디오",
    desc: "우리 학과 전용 안내 챗봇을 직접 만들어 신입생·재학생 문의 응대에 활용하는 법을 실습합니다.",
    caseTitle: "학과 FAQ 안내 챗봇 프로토타입",
    ready: "학사 공지·교과과정·시설 이용 안내 파일",
    action: "스튜디오에서 챗봇 생성 → 지식 파일 등록 → 테스트 질문으로 답변 검증",
    result: "근거 문서 기반 학과 FAQ 챗봇",
    prompt:
      "당신은 대경대학교 학과 안내 챗봇입니다. 등록된 학과 자료만 근거로 짧고 정확하게 답하세요.\n\n응답 원칙:\n1. 결론을 먼저 말하고 필요한 절차를 번호로 안내\n2. 날짜·연락처·자격 조건은 근거 문서명과 함께 제시\n3. 자료에 없는 내용은 추측하지 말고 ‘학과 사무실 확인이 필요합니다’라고 안내\n4. 개인정보를 요청하거나 노출하지 않기\n5. 답변 끝에 사용자가 이어서 물어볼 만한 질문 2개 제안",
    highlight: false,
    link: {
      href: "/chatbot-studio.html",
      label: "🧩 챗봇 스튜디오 심화 실습 페이지 열기",
    },
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-dk-cream">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Curriculum"
          title="60분 실습 커리큘럼"
          description="6개 세션 × 10분. 각 카드의 준비물과 프롬프트를 그대로 따라 하면, 수업이 끝날 때 바로 업무에 쓰는 결과물이 남습니다."
        />

        <ol className="mt-14 relative border-l-2 border-dk-gold/40 ml-3 sm:ml-6">
          {steps.map((s, i) => (
            <li key={s.title} className="mb-10 last:mb-0 ml-8 sm:ml-10">
              <span
                className={`absolute -left-[19px] sm:-left-[23px] flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full font-serif font-bold border-2 ${
                  s.highlight
                    ? "bg-dk-gold border-dk-gold text-dk-purple-950"
                    : "bg-dk-cream border-dk-purple-500 text-dk-purple-700"
                }`}
              >
                {i + 1}
              </span>

              <div
                className={`rounded-2xl p-6 border ${
                  s.highlight
                    ? "border-dk-gold/60 bg-gradient-to-br from-dk-purple-900 to-dk-purple-700 text-dk-cream shadow-lg"
                    : "border-dk-purple-200 bg-white/70"
                }`}
                style={!s.highlight ? { borderColor: "rgba(91,44,143,0.15)" } : undefined}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span
                    className={`font-mono text-xs sm:text-sm tracking-wide px-2.5 py-1 rounded-full ${
                      s.highlight
                        ? "bg-black/25 text-dk-gold-light"
                        : "bg-dk-purple-900/5 text-dk-purple-600"
                    }`}
                  >
                    {s.time}
                  </span>
                  {s.highlight && (
                    <span className="rounded-full bg-dk-gold text-dk-purple-950 text-xs font-bold px-3 py-1">
                      핵심 실습
                    </span>
                  )}
                </div>
                <h3
                  className={`mt-3 font-serif font-bold text-xl sm:text-2xl ${
                    s.highlight ? "text-dk-gold-light" : "text-dk-purple-900"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 leading-relaxed ${
                    s.highlight ? "text-dk-cream-dim" : "text-dk-purple-800/75"
                  }`}
                >
                  {s.desc}
                </p>
                <div
                  className={`mt-5 grid gap-3 sm:grid-cols-3 ${
                    s.highlight ? "text-dk-cream" : "text-dk-purple-900"
                  }`}
                >
                  <div className="sm:col-span-3">
                    <p
                      className={`text-xs font-bold tracking-[0.16em] ${
                        s.highlight ? "text-dk-gold-light" : "text-dk-purple-600"
                      }`}
                    >
                      현장 실습 사례
                    </p>
                    <p className="mt-1 font-bold">{s.caseTitle}</p>
                  </div>
                  {[
                    ["준비물", s.ready],
                    ["10분 실행", s.action],
                    ["결과물", s.result],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className={`rounded-xl p-3 ${
                        s.highlight ? "bg-white/[0.07]" : "bg-white"
                      }`}
                    >
                      <p
                        className={`text-[11px] font-bold ${
                          s.highlight ? "text-dk-gold-light" : "text-dk-purple-500"
                        }`}
                      >
                        {label}
                      </p>
                      <p className="mt-1 text-sm leading-6">{value}</p>
                    </div>
                  ))}
                </div>
                {"sampleFiles" in s && s.sampleFiles && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span
                      className={`text-xs font-bold ${
                        s.highlight ? "text-dk-gold-light" : "text-dk-purple-600"
                      }`}
                    >
                      실습용 샘플 파일 ·
                    </span>
                    {s.sampleFiles.map((f) => (
                      <a
                        key={f.href}
                        href={f.href}
                        download={f.download}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                          s.highlight
                            ? "border-white/20 text-dk-cream hover:bg-white/10"
                            : "border-dk-purple-300 text-dk-purple-800 hover:bg-dk-purple-900/5"
                        }`}
                        style={
                          !s.highlight ? { borderColor: "rgba(91,44,143,0.3)" } : undefined
                        }
                      >
                        {f.icon} {f.label} ⬇
                      </a>
                    ))}
                  </div>
                )}
                <CurriculumPrompt prompt={s.prompt} highlighted={s.highlight} />
                {"link" in s && s.link && (
                  <a
                    href={s.link.href}
                    className={`mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                      s.highlight
                        ? "bg-dk-gold text-dk-purple-950 hover:bg-dk-gold-light"
                        : "bg-dk-purple-700 text-white hover:bg-dk-purple-600"
                    }`}
                  >
                    {s.link.label} →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
