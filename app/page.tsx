import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
