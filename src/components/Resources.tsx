import SectionEyebrow from "./SectionEyebrow";

export default function Resources() {
  return (
    <section id="resources" className="dk-stage-bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Resources"
          title="자료실 · 문의"
          tone="onDark"
          align="center"
          description="교육 일정은 부서별로 순차 진행되며, 추후 공지를 통해 안내됩니다."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          <div className="dk-card rounded-2xl p-7">
            <p className="text-3xl">📅</p>
            <h3 className="mt-3 font-serif font-bold text-dk-cream">교육 일정</h3>
            <p className="mt-2 text-sm text-dk-cream-dim">부서별 순차 진행 · 추후 공지 예정</p>
          </div>
          <div className="dk-card rounded-2xl p-7">
            <p className="text-3xl">📖</p>
            <h3 className="mt-3 font-serif font-bold text-dk-cream">공식 매뉴얼</h3>
            <p className="mt-2 text-sm text-dk-cream-dim">교육 당일 배포되는 팩트챗 매뉴얼 참고</p>
          </div>
          <div className="dk-card rounded-2xl p-7">
            <p className="text-3xl">☎️</p>
            <h3 className="mt-3 font-serif font-bold text-dk-cream">문의처</h3>
            <p className="mt-2 text-sm text-dk-cream-dim">정보화 관련 부서로 문의해주세요</p>
          </div>
        </div>

        <a
          href="/chatbot-studio.html"
          className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 dk-card rounded-2xl p-7 text-left hover:bg-white/[0.06] transition-colors"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🧩</span>
            <div>
              <h3 className="font-serif font-bold text-dk-cream">챗봇 스튜디오 심화 실습 (별도 페이지)</h3>
              <p className="mt-1 text-sm text-dk-cream-dim">
                학과 FAQ 챗봇 · 재학생/입시 문의 워크플로우 만들기 · 프롬프트 5종 · 실습용 지식베이스 PDF 다운로드
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-dk-gold px-5 py-2.5 text-sm font-bold text-dk-purple-950">
            실습 페이지 열기 →
          </span>
        </a>
      </div>
    </section>
  );
}
