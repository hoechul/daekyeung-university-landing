import SectionEyebrow from "./SectionEyebrow";
import PromptCard from "./PromptCard";

const cases = [
  {
    icon: "🎪",
    dept: "공연기획팀 · 실용무용과",
    title: "정기공연 포스터 디자인",
    prompt:
      "실용무용과 2026 정기공연 '검은 나비' 포스터를 만들어줘. 어두운 보라색 무대 조명 아래 발레리나 실루엣이 날개처럼 팔을 펼친 구도, 금색 세리프 타이틀 서체, 안개 효과가 있는 세로형(2:3) 공연 포스터로.",
    reference: {
      image: "/downloads/ref-dance.jpg",
      imageAlt: "국립무용단의 삼고무·오고무 공연 사진",
      caption:
        "국립무용단(국립극장)의 '삼고무·오고무' 공연 — 화려한 한복과 대형 북 세트가 어우러진 국내 최고 수준의 전통무용 무대 연출 참고 사례입니다.",
      credit: "Brian Negin (Wikimedia Commons)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Korean_dance-Samgomu_Ogomu-01.jpg",
      license: "CC BY-SA 3.0",
      width: 1200,
      height: 800,
    },
  },
  {
    icon: "🎨",
    dept: "특수분장예술과",
    title: "특수분장 컨셉 아트",
    prompt:
      "특수분장예술과 실습용 좀비 캐릭터 분장 컨셉 아트를 그려줘. 상처와 진물 텍스처를 사실적으로 표현하고, 무대 조명처럼 측면에서 강한 붉은 조명이 비치는 클로즈업 인물 이미지로.",
    reference: {
      image: "/downloads/ref-beauty.jpg",
      imageAlt: "K-Beauty Expo Korea 전시장 전경 사진",
      caption:
        "국내 최대 규모 뷰티·분장 산업 박람회 'K-Beauty Expo Korea' 현장. 특수분장 자체보다는 국내 분장·뷰티 산업의 규모감을 보여주는 참고 이미지입니다.",
      credit: "Kintexsw (Wikimedia Commons)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:K-Beauty_Expo_Korea.jpg",
      license: "CC BY-SA 4.0",
      width: 1200,
      height: 800,
    },
  },
  {
    icon: "🏛️",
    dept: "연기예술과 · 무대미술",
    title: "무대·세트 디자인 시안",
    prompt:
      "연기예술과 졸업공연 무대 세트 디자인 시안을 만들어줘. 블랙박스 극장 컨셉, 안개 효과와 천장에서 떨어지는 스포트라이트 한 줄기, 미니멀한 계단형 무대 구조로 시각화해줘.",
    reference: {
      image: "/downloads/ref-stage.jpg",
      imageAlt: "부채춤 공연의 보라색 무대 조명 사진",
      caption:
        "전통 부채춤 공연의 보라색 무대 조명 연출 — 대경대 브랜드 컬러와 맞닿는 국내 최고 수준의 무대 조명·연출 참고 사례입니다.",
      credit: "Ramesh Lalwani (Wikimedia Commons)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Korean_Dances-4.jpg",
      license: "CC BY 2.0",
      width: 1024,
      height: 682,
    },
  },
  {
    icon: "📣",
    dept: "입학홍보처 · K-실용음악과",
    title: "입시홍보 카드뉴스 이미지",
    prompt:
      "K-실용음악과 2026학년도 수시모집 홍보용 인스타그램 카드뉴스 이미지를 만들어줘. 대경대학교 브랜드 컬러인 보라와 골드 톤을 활용하고, 마이크와 무대 조명을 모티프로 정사각형(1:1) 비율로.",
    reference: {
      image: "/downloads/ref-vocal.jpg",
      imageAlt: "K-POP World Festival 공연 전경 사진",
      caption:
        "K-POP World Festival 공연 전경 — 수만 명이 모인 국내 최고 규모의 K-pop 콘서트 스테이지·조명 연출 참고 사례입니다.",
      credit: "Jeon Han, Korea.net (Wikimedia Commons)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Korea_KPOP_World_Festival_53.jpg",
      license: "CC BY-SA 2.0",
      width: 1200,
      height: 578,
    },
  },
];

export default function ImageGenShowcase() {
  return (
    <section id="image" className="dk-stage-bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Practice · Image Generation"
          title="🖼️ 이미지 생성 실습 사례"
          description="공연 포스터부터 분장 컨셉, 무대 디자인, 입시 홍보물까지 — 팩트챗 프롬프트만으로 완성하는 4가지 실습 예제입니다. 프롬프트를 복사해 그대로 실습하고, 참고 이미지로 결과물의 방향을 잡아보세요."
          tone="onDark"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <PromptCard key={c.title} {...c} accent="gold" />
          ))}
        </div>
      </div>
    </section>
  );
}
