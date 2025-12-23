import Image from "next/image";
import HeroSection from "../components/HeroSection";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-background relative font-lalezar">
      <HeroSection />
      <StatsBar  />
    </div>
  );
}
