import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { WhyUs } from "@/components/WhyUs";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Packages } from "@/components/Packages";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <WhyUs />
        <BeforeAfter />
        <Packages />
        <Steps />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
