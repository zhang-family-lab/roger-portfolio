import Hero from "@/components/Hero";
import SoccerShowcase from "@/components/SoccerShowcase";
import ArtsGallery from "@/components/ArtsGallery";
import MusicSection from "@/components/MusicSection";
import Academics from "@/components/Academics";
import WhiteStag from "@/components/WhiteStag";

export default function Home() {
  return (
    <main>
      <Hero />
      <Academics />
      <SoccerShowcase />
      <ArtsGallery />
      <MusicSection />
      <WhiteStag />
    </main>
  );
}
