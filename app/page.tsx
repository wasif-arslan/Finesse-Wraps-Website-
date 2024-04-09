import About from "./components/About";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Price />
      <Reviews />
      <Portfolio />
      <FAQs />
    </section>
  );
}
