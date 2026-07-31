type Tone = "onDark" | "onLight";

export default function SectionEyebrow({
  eyebrow,
  title,
  description,
  tone = "onLight",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const isDark = tone === "onDark";
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <p
        className={`font-display italic tracking-[0.3em] text-xs sm:text-sm uppercase ${
          isDark ? "text-dk-gold-light" : "text-dk-purple-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`dk-gold-underline ${isCenter ? "center" : ""} mt-3 font-serif font-bold text-3xl sm:text-4xl ${
          isDark ? "text-dk-cream" : "text-dk-purple-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
            isCenter ? "mx-auto" : ""
          } ${isDark ? "text-dk-cream-dim" : "text-dk-purple-800/80"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
