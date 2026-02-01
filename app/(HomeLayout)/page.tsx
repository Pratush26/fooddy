import Banner from "@/components/sections/Home/Banner";
import Featured from "@/components/sections/Home/Featured";
import HowItWorks from "@/components/sections/Home/HowDoseItWorks";
import Stats from "@/components/sections/Home/Stats";
import WhyToChoose from "@/components/sections/Home/WhyToChoose";

export default function Home() {
  return (
    <main>
      <Banner />
      <Featured />
      <Stats />
      <WhyToChoose />
      <HowItWorks />
    </main>
  );
}
