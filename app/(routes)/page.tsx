import About from "./_components/about";
import Features from "./_components/features/features";
import Hero from "./_components/hero";
import Pricing from "./_components/pricing/pricing";
import Services from "./_components/services/services";
import Team from "./_components/team/team";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <About />
      <Features />
      <Services />
      <Team />
    </>
  );
}
