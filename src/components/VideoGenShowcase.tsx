import SectionEyebrow from "./SectionEyebrow";
import PromptCard from "./PromptCard";

const cases = [
  {
    icon: "🥋",
    dept: "국제태권도과",
    title: "공연 홍보 티저 영상",
    prompt:
      "국제태권도과 시범단 하이라이트 15초 티저 영상을 만들어줘. 역동적인 발차기와 격파 동작을 슬로우모션으로 강조하고, 웅장한 오케스트라 사운드를 배경음악으로 넣어줘.",
    reference: {
      image: "/downloads/ref-taekwondo.jpg",
      imageAlt: "국내 태권도 시범단 거리 공연 사진",
      caption:
        "국내 태권도 시범단의 거리 공연 사진 — 대형을 갖춘 동작 연출과 절도 있는 품새가 돋보이는 국내 최고 수준의 태권도 시범 참고 사례입니다.",
      credit: "Jeon Han, Korea.net (Wikimedia Commons)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Korea_Insadon_Taekwondo_01_(7877461652).jpg",
      license: "CC BY-SA 2.0",
      width: 1200,
      height: 668,
    },
  },
  {
    icon: "💃",
    dept: "K-모델연기과",
    title: "입시설명회 숏폼 릴스",
    prompt:
      "K-모델연기과 입시설명회 안내용 15초 인스타그램 릴스를 만들어줘. 런웨이 워킹 장면을 중심으로, 화면 하단에 '2026학년도 수시모집' 자막 텍스트를 함께 넣어줘.",
    reference: {
      image: "/downloads/ref-runway.jpg",
      imageAlt: "한복 패션쇼 런웨이 워킹 사진",
      caption:
        "한복 패션쇼 '한복, 디자인을 만나다'의 런웨이 워킹 장면 — 워킹 자세와 시선 처리가 돋보이는 국내 최고 수준의 런웨이 참고 사례입니다.",
      credit: "Jeon Han, Korea.net (Wikimedia Commons)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Korea_Hanbok_Fashion_Show_15_(8423372530).jpg",
      license: "CC BY-SA 2.0",
      width: 1200,
      height: 1676,
    },
  },
  {
    icon: "🎬",
    dept: "연기예술과",
    title: "졸업공연 하이라이트 아카이빙",
    prompt:
      "연기예술과 졸업공연 리허설 클립들을 모아 3분 하이라이트 영상으로 요약 편집해줘. 장면 전환 효과와 배우 이름 자막을 넣고, 마지막에 커튼콜 장면으로 마무리해줘.",
    reference: {
      image: "/downloads/ref-acting.jpg",
      imageAlt: "궁중무용 가인전목단 공연 사진",
      caption:
        "궁중무용 '가인전목단' 공연 사진 — 화려한 색감의 무대 의상과 군무 대형이 돋보이는 국내 최고 수준의 전통 공연 아카이빙 참고 사례입니다.",
      credit: "m-louis (Wikimedia Commons)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Korean.Dance-Muhee-01.jpg",
      license: "CC BY 2.0",
      width: 1200,
      height: 800,
    },
  },
  {
    icon: "🪞",
    dept: "분장예술과",
    title: "학과 소개 캠페인 영상",
    prompt:
      "분장예술과 실습실을 소개하는 60초 홍보 영상을 만들어줘. 밝은 스튜디오 조명 속 분장 실습 장면과 학생 인터뷰 컷을 교차 편집하고, 마지막에 대경대학교 로고와 골드 컬러 자막으로 마무리해줘.",
    reference: {
      image: "/downloads/ref-makeup.jpg",
      imageAlt: "롯데월드 할로윈 퍼레이드 캐릭터 분장·의상 공연 사진",
      caption:
        "롯데월드 할로윈 퍼레이드의 캐릭터 분장·의상 공연 — 특수분장 자체보다는 캐릭터 의상 연출과 퍼포먼스 편집에 참고할 만한 이미지입니다.",
      credit: "Ethan Doyle White (Wikimedia Commons)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Halloween_Performance_at_Lotte_World.jpg",
      license: "CC BY-SA 4.0",
      width: 1200,
      height: 800,
    },
  },
];

export default function VideoGenShowcase() {
  return (
    <section id="video" className="bg-dk-purple-950">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28">
        <SectionEyebrow
          eyebrow="Practice · Video Generation"
          title="🎬 영상 생성 실습 사례"
          description="시범단 하이라이트부터 입시 홍보 릴스, 졸업공연 아카이빙까지 — 프롬프트 한 번으로 완성하는 4가지 영상 제작 실습입니다. 참고 이미지로 원하는 장면의 톤을 미리 확인해보세요."
          tone="onDark"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <PromptCard key={c.title} {...c} accent="rose" />
          ))}
        </div>
      </div>
    </section>
  );
}
