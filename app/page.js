import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      <LastSection/>
    </div>
  );
}
