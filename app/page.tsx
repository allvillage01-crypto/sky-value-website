import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
