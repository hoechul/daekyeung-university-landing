import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import LlmCompare from "@/components/LlmCompare";
import FreeModelGuide from "@/components/FreeModelGuide";
import Curriculum from "@/components/Curriculum";
import ImageGenShowcase from "@/components/ImageGenShowcase";
import VideoGenShowcase from "@/components/VideoGenShowcase";
import Tips from "@/components/Tips";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Overview />
        <LlmCompare />
        <FreeModelGuide />
        <Curriculum />
        <ImageGenShowcase />
        <VideoGenShowcase />
        <Tips />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
