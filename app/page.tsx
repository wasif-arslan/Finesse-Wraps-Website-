import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <section>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>
    </section>
  );
}
